"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   subsets: ["latin"],
   display: "swap",
});

const theme = createTheme({
   palette: {
      mode: "light",
      primary: {
         main: '#4178d8'
       },
      secondary: {
         main: "#fbde00",
      },
      background: {
         paper: "#e3f2fd",
      },
   },
   breakpoints: {
      values: {
        xs: 0,
        sm: 405,
        md: 600,
        lg: 900,
        xl: 1536,
      },
    },
   typography: {
      fontFamily: roboto.style.fontFamily,
   },
});

export default theme;
