"use client";
import {
   Alert,
   AlertTitle,
   Backdrop,
   Box,
   Button,
   CircularProgress,
   MenuItem,
   Paper,
   TextField,
   Typography,
   Zoom,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { MuiTelInput } from "mui-tel-input";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const availablePositions = [
   "Apprentice Plumber",
   "Journeyman Plumber",
   "Master Plumber",
   "Service Plumber",
   "New Construction Plumber",
   "Drain Technician",
   "Sewer/Water Line Installer",
   "Plumbing Foreman",
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
      if (!phoneValue || phoneValue.replace(/\s+/g, "").length < 12) {
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

   const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.length) return;
      setError("");

      const file = e.target.files[0];
      if (!supportedResumeTypes.includes(file.type)) {
         setError("Resume must be a PDF or Word document.");
         e.target.value = "";
         return;
      }

      if (file.size > maxResumeSizeInMB * 1024 * 1024) {
         setError(`Resume must be ${maxResumeSizeInMB}MB or smaller.`);
         e.target.value = "";
         return;
      }

      setResume(file);
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
               select
               name="position"
               label="Position Applying For"
               fullWidth
               margin="normal"
               defaultValue=""
            >
               <MenuItem value="" disabled>
                  Select a position
               </MenuItem>
               {availablePositions.map((position) => (
                  <MenuItem key={position} value={position}>
                     {position}
                  </MenuItem>
               ))}
            </TextField>
            <TextField
               required
               name="name"
               label="Full Name"
               fullWidth
               margin="normal"
            />
            <TextField
               required
               name="email"
               type="email"
               label="Email"
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
               onChange={setPhoneValue}
               margin="normal"
               error={error.toLowerCase().includes("phone")}
            />
            <TextField
               required
               name="currentCity"
               label="Current City"
               fullWidth
               margin="normal"
            />
            <TextField
               required
               select
               name="currentState"
               label="Current State"
               fullWidth
               margin="normal"
               defaultValue=""
            >
               <MenuItem value="" disabled>
                  Select a state
               </MenuItem>
               {usStates.map((state) => (
                  <MenuItem key={state} value={state}>
                     {state}
                  </MenuItem>
               ))}
            </TextField>
            <TextField
               required
               name="yearsExperience"
               type="number"
               label="Years of Experience"
               fullWidth
               margin="normal"
               slotProps={{ htmlInput: { min: 0, max: 60 } }}
            />
            <input
               id="resume-input"
               type="file"
               accept=".pdf,.doc,.docx"
               onChange={handleResumeChange}
               style={{ display: "none" }}
            />
            <label htmlFor="resume-input">
               <Button
                  component="span"
                  variant="outlined"
                  sx={{ mt: "0.5rem" }}
                  endIcon={<CloudUploadIcon />}
               >
                  Upload Resume
               </Button>
            </label>
            {!!resume && (
               <Typography sx={{ mt: "0.5rem", fontSize: "0.95rem" }}>
                  Attached: {resume.name}
               </Typography>
            )}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
               <Button
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  endIcon={<SendIcon />}
               >
                  Submit Application
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
                     <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                        <Typography
                           sx={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1.5rem",
                           }}
                        >
                           Application submitted!
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                           Thanks for applying. We will review and reach out soon.
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

export default CareersApplicationForm;
