"use client";
import {
   ActionIcon,
   Alert,
   Box,
   Button,
   FileButton,
   Group,
   LoadingOverlay,
   Overlay,
   Paper,
   Stack,
   Text,
   Textarea,
   TextInput,
   Title,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IconSend, IconUpload, IconX } from "@tabler/icons-react";
import imageCompression from "browser-image-compression";
import { maxImagesInRequest, maxRequestSizeInMB } from "@/Constants";
import Image from "next/image";
import { reportConversion } from "@/lib/gtag";
import { useRouter } from "next/router";

const ContactForm: React.FC = () => {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const [messageSent, setMessageSent] = useState(false);
   const [error, setError] = useState("");
   const [phoneValue, setPhoneValue] = useState("");
   const [subjectValue, setSubjectValue] = useState("");
   const [images, setImages] = useState<File[]>([]);

   useEffect(() => {
      const subjectQuery = router.query.subject;
      if (typeof subjectQuery !== "string") {
         return;
      }

      setSubjectValue(subjectQuery.slice(0, 120));
   }, [router.query.subject]);

   const checkValidity = () => {
      const digits = phoneValue.replace(/\D/g, "");
      if (digits.length < 10) {
         setError("Phone number is required.");
         return false;
      }

      return true;
   };

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      setError("");

      if (!checkValidity()) {
         setLoading(false);
         return;
      }

      const formData = new FormData(event.currentTarget);

      if (images.length > 0) {
         const options = {
            maxSizeMB: Math.floor((maxRequestSizeInMB - 0.5) / images.length),
            maxWidthOrHeight: 1920,
         };
         const compressedImages = await Promise.all(
            images.map((img) => imageCompression(img, options))
         );

         for (const img of compressedImages) {
            formData.append("images", new File([img], img.name));
         }
      }

      const res = await fetch("/api/send", {
         method: "POST",
         headers: {
            "Context-Type": "multipart/form-data",
            Accept: "multipart/form-data",
         },
         body: formData,
      });

      if (res.ok) {
         reportConversion();
         setMessageSent(true);
      } else {
         setError(
            "There was an error sending your message. Please try again later."
         );
      }

      setLoading(false);
   };

   const handleFiles = (files: File[]) => {
      if (files.length > maxImagesInRequest) {
         setError(`You can only add up to ${maxImagesInRequest} images.`);
         setImages(files.slice(0, maxImagesInRequest));
         return;
      }

      setImages(files);
   };

   return (
      <Paper
         component="form"
         onSubmit={handleSubmit}
         withBorder
         p="md"
         mt="sm"
         pos="relative"
         bg="white"
      >
         <LoadingOverlay visible={loading && !messageSent} />
         {messageSent && (
            <Overlay color="#16246c" backgroundOpacity={0.92} center>
               <Stack align="center" gap="xs">
                  <Title order={3} c="white">
                     Message sent!
                  </Title>
                  <Text c="white">
                     We will get back to you as soon as possible.
                  </Text>
               </Stack>
            </Overlay>
         )}
         {!!error && (
            <Alert color="red" title="Error" mb="md">
               {error}
            </Alert>
         )}
         <TextInput required name="name" id="name-input" label="Name" mb="sm" />
         <TextInput
            required
            name="phone"
            id="phone-input"
            label="Phone Number"
            type="tel"
            placeholder="(406) 555-1234"
            value={phoneValue}
            onChange={(event) => setPhoneValue(event.currentTarget.value)}
            error={error.toLowerCase().includes("phone") ? error : undefined}
            mb="sm"
         />
         <TextInput name="email" id="email-input" label="Email" mb="sm" />
         <TextInput
            name="subject"
            id="subject-input"
            label="Subject"
            mb="sm"
            value={subjectValue}
            onChange={(event) => setSubjectValue(event.currentTarget.value)}
         />
         <Textarea
            required
            name="message"
            id="message-input"
            label="Message"
            minRows={5}
            mb="sm"
         />
         <FileButton
            onChange={(payload) => {
               const files = Array.isArray(payload)
                  ? payload
                  : payload
                    ? [payload]
                    : [];
               handleFiles(files);
            }}
            accept="image/*"
            multiple
         >
            {(props) => (
               <Button
                  {...props}
                  variant="outline"
                  rightSection={<IconUpload size={16} />}
               >
                  Add Images
               </Button>
            )}
         </FileButton>
         <Group gap="sm" my="sm" wrap="nowrap" style={{ overflowX: "auto" }}>
            {images.map((img, i) => (
               <Box key={`${img.name}-${i}`} pos="relative">
                  <Image
                     style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                     src={URL.createObjectURL(img)}
                     alt="image to upload"
                     height={100}
                     width={100}
                  />
                  <ActionIcon
                     size="sm"
                     color="dark"
                     variant="filled"
                     pos="absolute"
                     top={4}
                     right={4}
                     onClick={() => {
                        setImages(images.filter((_, index) => index !== i));
                     }}
                  >
                     <IconX size={14} />
                  </ActionIcon>
               </Box>
            ))}
         </Group>
         <Group justify="flex-end">
            <Button
               type="submit"
               disabled={loading}
               rightSection={<IconSend size={16} />}
            >
               Send
            </Button>
         </Group>
      </Paper>
   );
};

export default ContactForm;
