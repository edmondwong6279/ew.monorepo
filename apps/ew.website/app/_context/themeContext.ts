"use client";

import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

interface ContextType {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export const ThemeContext = createContext<ContextType>({} as ContextType);
