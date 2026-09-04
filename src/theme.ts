"use client";
import { createTheme, MantineColorsTuple } from "@mantine/core";
import { Inter, Space_Grotesk } from "next/font/google";

export const inter = Inter({
   subsets: ["latin"],
   display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
   subsets: ["latin"],
   display: "swap",
   weight: ["400", "500", "600", "700"],
});

const navy: MantineColorsTuple = [
   "#eef1f8",
   "#d5dbed",
   "#a8b4db",
   "#798bc8",
   "#5369b8",
   "#3d55ae",
   "#2b3e8e",
   "#243575",
   "#1c2b5e",
   "#16246c",
];

const gold: MantineColorsTuple = [
   "#fbf6e6",
   "#f3e7c4",
   "#e9d08a",
   "#deb84f",
   "#d4af37",
   "#c9a227",
   "#b08c1d",
   "#8f7118",
   "#6e5713",
   "#4a3a0c",
];

export const theme = createTheme({
   primaryColor: "navy",
   colors: {
      navy,
      gold,
   },
   defaultRadius: "md",
   fontFamily: inter.style.fontFamily,
   headings: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: "700",
   },
   components: {
      Button: {
         defaultProps: {
            fw: 700,
         },
      },
      Anchor: {
         defaultProps: {
            underline: "hover",
         },
      },
      Paper: {
         defaultProps: {
            radius: "md",
         },
      },
      Card: {
         defaultProps: {
            radius: "md",
            padding: "lg",
         },
      },
   },
});
