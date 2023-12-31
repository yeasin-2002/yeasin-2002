"use client";

import { createContext, useState } from "react";
import React from "react";

export type themeType = "Greenish" | "Midnight-Blue";

interface contextTypes {
  theme: themeType;
  setTheme: React.Dispatch<React.SetStateAction<themeType>>;
}

export const themeContext = createContext<contextTypes>({
  theme: "Midnight-Blue",
  setTheme: () => {},
});
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<themeType>("Midnight-Blue");

  return (
    <themeContext.Provider
      value={{
        theme: theme,
        setTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
