import {
   Box,
} from "@mui/material";
import Link from "next/link";
import React from "react";


export function JoinTeamRibbon() {
   return (
      <Box
         component={Link}
         href="/careers"
         sx={{
            position: "absolute",
            top: {xs: "0rem", md: "0.5rem" },
            left: "-2.75rem",
            zIndex: 3,
            bgcolor: "error.main",
            color: "error.contrastText",
            px: { xs: 2.5, md: 3.5 },
            py: { xs: 1, md: 1.25 },
            transform: "rotate(-11deg)",
            transformOrigin: "0 0",
            boxShadow: 3,
            fontSize: { xs: "0.8rem", md: "0.95rem" },
            fontWeight: 800,
            letterSpacing: 0.06,
            textAlign: "center",
            maxWidth: { xs: 220, md: 300 },
            lineHeight: 1.35,
            textDecoration: "none",
            borderRadius: 2
         }}
      >
         Now Hiring · Join Our Team
      </Box>
   );
}
