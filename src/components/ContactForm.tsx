"use client";
import {
   Alert,
   AlertTitle,
   Backdrop,
   Box,
   Button,
   CircularProgress,
   IconButton,
   Paper,
   Stack,
   TextField,
   Typography,
   Zoom,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { MuiTelInput } from "mui-tel-input";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import imageCompression from "browser-image-compression";
import { maxImagesInRequest, maxRequestSizeInMB } from "@/app/Constants";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const ContactForm: React.FC = () => {
   const [loading, setLoading] = useState(false);
   const [messageSent, setMessageSent] = useState(false);
   const [error, setError] = useState("");
   const [phoneValue, setPhoneValue] = useState("");
   const [images, setImages] = useState<File[]>([]);

   const handlePhoneChange = (value: string) => {
      setPhoneValue(value);
   };

   const checkValidity = () => {
      if (!phoneValue || phoneValue.replace(/\s+/g, "").length < 12) {
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
         //compress images
         const options = {
            maxSizeMB: Math.floor((maxRequestSizeInMB - 0.5) / images.length),
            maxWidthOrHeight: 1920,
         };
         const compressedImages = await Promise.all(
            images.map((img) => imageCompression(img, options))
         );

         for (let img of compressedImages) {
            // compressing the image turns it into a blob, convert it back to a file before sending
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
         setMessageSent(true);
      } else {
         setError(
            "There was an error sending your message. Please try again later."
         );
      }

      setLoading(false);
   };

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;

      const files = Array.from(e.target.files);

      if (files.length > maxImagesInRequest) {
         setError(`You can only add up to ${maxImagesInRequest} images.`);
         setImages(files.slice(0, maxImagesInRequest));
         return;
      }

      setImages(files);
   };

   return (
      <Paper
         component={"form"}
         onSubmit={handleSubmit}
         variant="outlined"
         sx={{
            p: "1rem",
            mt: "0.5rem",
            backgroundColor: "secondary.main",
            borderRadius: "0.5rem",
            position: "relative",
         }}
      >
         <Box>
            {!!error && (
               <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
               </Alert>
            )}
            <TextField
               required
               name="name"
               id="name-input"
               label="Name"
               fullWidth
               margin="normal"
            />
            <MuiTelInput
               required
               label="Phone Number"
               forceCallingCode
               defaultCountry="US"
               onlyCountries={["US", "CA"]}
               sx={{ width: "100%" }}
               name="phone"
               value={phoneValue}
               onChange={handlePhoneChange}
               margin="normal"
               error={error.toLowerCase().includes("phone")}
            />
            <TextField
               name="email"
               id="email-input"
               label="Email"
               fullWidth
               margin="normal"
            />
            <TextField
               name="subject"
               id="subject-input"
               label="Subject"
               fullWidth
               margin="normal"
            />
            <TextField
               required
               name="message"
               id="message-input"
               label="Message"
               multiline
               fullWidth
               rows={5}
               margin="normal"
            />
            <input
               // name="images"
               id="images-input"
               multiple
               type="file"
               accept="image/*"
               onChange={handleFileChange}
               style={{
                  display: "none",
               }}
            />
            <label htmlFor="images-input">
               <Button
                  component="span"
                  variant="outlined"
                  sx={{ mt: "0.25rem" }}
                  endIcon={<CloudUploadIcon />}
               >
                  Add Images
               </Button>
            </label>
            <Stack
               direction="row"
               spacing={2}
               sx={{ my: "0.5rem", overflowX: "auto" }}
            >
               {images.map((img, i) => (
                  <Box
                     key={i}
                     sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                     }}
                  >
                     <Image
                        style={{
                           objectFit: "cover",
                           borderRadius: "0.5rem",
                        }}
                        src={URL.createObjectURL(img)}
                        alt="image to upload"
                        height={100}
                        width={100}
                     />
                     <IconButton
                        size="small"
                        sx={{
                           position: "absolute",
                           top: 0,
                           right: 0,
                           backgroundColor: "rgb(255,255,255,0.65)",
                        }}
                        onClick={() => {
                           setImages(images.filter((_, index) => index !== i));
                        }}
                     >
                        <CloseIcon />
                     </IconButton>
                  </Box>
               ))}
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
               <Button
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  endIcon={<SendIcon />}
               >
                  Send
               </Button>
            </Box>
         </Box>

         <Backdrop
            open={loading || messageSent}
            sx={{
               position: "absolute",
               borderRadius: "0.5rem",
               backgroundColor: "primary.dark",
            }}
         >
            {messageSent ? (
               <Box>
                  <Zoom in={messageSent}>
                     <Box
                        sx={{
                           textAlign: "center",
                           position: "relative",
                           zIndex: 1,
                        }}
                     >
                        <Typography
                           sx={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1.5rem",
                           }}
                        >
                           Message sent!
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                           We will get back to you as soon as possible.
                        </Typography>
                     </Box>
                  </Zoom>
               </Box>
            ) : (
               <CircularProgress sx={{ color: "primary.light" }} />
            )}
         </Backdrop>
      </Paper>
   );
};

export default ContactForm;
