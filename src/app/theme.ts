"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { themes } from './Constants';

const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   subsets: ["latin"],
   display: "swap",
});

const getTheme = (themeName: themes) =>  createTheme({
   palette: {
      mode: themeName,
   },
   typography: {
      fontFamily: roboto.style.fontFamily,
   },
});

export default getTheme;
