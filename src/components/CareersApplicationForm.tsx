"use client";
import {
   Alert,
   Button,
   FileButton,
   Group,
   LoadingOverlay,
   NativeSelect,
   Overlay,
   Paper,
   Stack,
   Text,
   TextInput,
   Title,
} from "@mantine/core";
import React, { useState } from "react";
import { IconSend, IconUpload } from "@tabler/icons-react";

const availablePositions = [
   "Journeyman Plumber",
   "Customer Service Representative",
];

const usStates = [
   "Alabama",
   "Alaska",
   "Arizona",
   "Arkansas",
   "California",
   "Colorado",
   "Connecticut",
   "Delaware",
   "Florida",
   "Georgia",
   "Hawaii",
   "Idaho",
   "Illinois",
   "Indiana",
   "Iowa",
   "Kansas",
   "Kentucky",
   "Louisiana",
   "Maine",
   "Maryland",
   "Massachusetts",
   "Michigan",
   "Minnesota",
   "Mississippi",
   "Missouri",
   "Montana",
   "Nebraska",
   "Nevada",
   "New Hampshire",
   "New Jersey",
   "New Mexico",
   "New York",
   "North Carolina",
   "North Dakota",
   "Ohio",
   "Oklahoma",
   "Oregon",
   "Pennsylvania",
   "Rhode Island",
   "South Carolina",
   "South Dakota",
   "Tennessee",
   "Texas",
   "Utah",
   "Vermont",
   "Virginia",
   "Washington",
   "West Virginia",
   "Wisconsin",
   "Wyoming",
];

const supportedResumeTypes = [
   "application/pdf",
   "application/msword",
   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const maxResumeSizeInMB = 5;

const CareersApplicationForm: React.FC = () => {
   const [loading, setLoading] = useState(false);
   const [messageSent, setMessageSent] = useState(false);
   const [error, setError] = useState("");
   const [phoneValue, setPhoneValue] = useState("");
   const [resume, setResume] = useState<File | null>(null);

   const checkValidity = () => {
      const digits = phoneValue.replace(/\D/g, "");
      if (digits.length < 10) {
         setError("Phone number is required.");
         return false;
      }
      if (!resume) {
         setError("Resume is required.");
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
      if (resume) formData.append("resume", resume);

      const res = await fetch("/api/send-application", {
         method: "POST",
         body: formData,
      });

      if (res.ok) {
         setMessageSent(true);
      } else {
         setError(
            "There was an error sending your application. Please try again later."
         );
      }

      setLoading(false);
   };

   const handleResumeChange = (file: File | null) => {
      if (!file) return;
      setError("");

      if (!supportedResumeTypes.includes(file.type)) {
         setError("Resume must be a PDF or Word document.");
         return;
      }

      if (file.size > maxResumeSizeInMB * 1024 * 1024) {
         setError(`Resume must be ${maxResumeSizeInMB}MB or smaller.`);
         return;
      }

      setResume(file);
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
                     Application submitted!
                  </Title>
                  <Text c="white">
                     Thanks for applying. We will review and reach out soon.
                  </Text>
               </Stack>
            </Overlay>
         )}
         {!!error && (
            <Alert color="red" title="Error" mb="md">
               {error}
            </Alert>
         )}
         <NativeSelect
            required
            name="position"
            label="Position Applying For"
            data={[
               { value: "", label: "Select a position" },
               ...availablePositions.map((position) => ({
                  value: position,
                  label: position,
               })),
            ]}
            mb="sm"
         />
         <TextInput required name="name" label="Full Name" mb="sm" />
         <TextInput required name="email" type="email" label="Email" mb="sm" />
         <TextInput
            required
            name="phone"
            label="Phone Number"
            type="tel"
            placeholder="(406) 555-1234"
            value={phoneValue}
            onChange={(event) => setPhoneValue(event.currentTarget.value)}
            error={error.toLowerCase().includes("phone") ? error : undefined}
            mb="sm"
         />
         <TextInput required name="currentCity" label="Current City" mb="sm" />
         <NativeSelect
            required
            name="currentState"
            label="Current State"
            data={[
               { value: "", label: "Select a state" },
               ...usStates.map((state) => ({ value: state, label: state })),
            ]}
            mb="sm"
         />
         <TextInput
            required
            name="yearsExperience"
            type="number"
            label="Years of Experience"
            min={0}
            max={60}
            mb="sm"
         />
         <FileButton
            onChange={handleResumeChange}
            accept=".pdf,.doc,.docx"
         >
            {(props) => (
               <Button
                  {...props}
                  variant="outline"
                  rightSection={<IconUpload size={16} />}
               >
                  Upload Resume
               </Button>
            )}
         </FileButton>
         {!!resume && (
            <Text mt="xs" size="sm">
               Attached: {resume.name}
            </Text>
         )}
         <Group justify="flex-end" mt="md">
            <Button
               type="submit"
               disabled={loading}
               rightSection={<IconSend size={16} />}
            >
               Submit Application
            </Button>
         </Group>
      </Paper>
   );
};

export default CareersApplicationForm;
