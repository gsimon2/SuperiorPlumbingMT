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
         main: '#1976d2',
       },
      secondary: {
         main: "#fbde00",
      },
      background: {
         paper: "#f2f2f5",
      },
   },
   typography: {
      fontFamily: roboto.style.fontFamily,
   },
});

export default theme;
