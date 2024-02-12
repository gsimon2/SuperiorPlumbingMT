"use client";
import { localStorageKeys, themes } from '@/app/Constants';

export const getInitialTheme = (): themes => {
   const savedTheme = localStorage.getItem(localStorageKeys.themePreference);

   if (savedTheme) {
      return savedTheme === themes.dark ? themes.dark : themes.light;
   }

   return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light;
};
