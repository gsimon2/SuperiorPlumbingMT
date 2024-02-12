import {
   Box,
   ToggleButton,
   ToggleButtonGroup,
   Typography,
   useTheme,
} from "@mui/material";
import React from "react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { localStorageKeys, themes } from '@/app/Constants';

const ThemeSelector: React.FC<IThemeSelectorProps> = ({ setTheme }) => {
   const theme = useTheme();
   const currentTheme = theme.palette.mode;

   const handleThemeChange = (
      event: React.MouseEvent<HTMLElement>,
      newTheme: themes
   ) => {
      if (newTheme && newTheme !== currentTheme) {
         localStorage.setItem(localStorageKeys.themePreference, newTheme);
         setTheme(newTheme);
      }
   };

   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
         }}
      >
         <Typography
            sx={{ marginRight: "0.5rem" }}
            onClick={(e) =>
               handleThemeChange(
                  e,
                  currentTheme === themes.dark ? themes.light : themes.dark
               )
            }
         >
            Theme
         </Typography>
         <ToggleButtonGroup
            value={currentTheme}
            exclusive
            onChange={handleThemeChange}
            aria-label="Theme Selection"
         >
            <ToggleButton
               value={themes.dark}
               aria-label="Dark Theme"
               title="Dark Theme"
            >
               <NightsStayIcon />
            </ToggleButton>
            <ToggleButton
               value={themes.light}
               aria-label="Light Theme"
               title="Light Theme"
            >
               <Brightness7Icon />
            </ToggleButton>
         </ToggleButtonGroup>
      </Box>
   );
};

export interface IThemeSelectorProps {
   setTheme: (newTheme: themes) => void;
}

export default ThemeSelector;
