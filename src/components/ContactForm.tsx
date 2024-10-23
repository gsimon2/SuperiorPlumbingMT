"use client";
import {
   Alert,
   AlertTitle,
   Backdrop,
   Box,
   Button,
   CircularProgress,
   Paper,
   TextField,
   Typography,
   Zoom,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { MuiTelInput } from "mui-tel-input";

const ContactForm: React.FC = () => {
   const [loading, setLoading] = useState(false);
   const [messageSent, setMessageSent] = useState(false);
   const [error, setError] = useState("");
   const [phoneValue, setPhoneValue] = useState("");

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
      const formProps = Object.fromEntries(formData);

      const res = await fetch("/api/send", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formProps),
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
               label="Phone Number"
               forceCallingCode
               defaultCountry="US"
               onlyCountries={["US", "CA"]}
               sx={{ width: "100%" }}
               name="phone"
               value={phoneValue}
               onChange={handlePhoneChange}
               required
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
               name="message"
               id="message-input"
               label="Message"
               multiline
               fullWidth
               rows={5}
               margin="normal"
               required
            />
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