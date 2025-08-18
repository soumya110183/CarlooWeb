"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [price, setPrice] = useState({});
  const [plan, setPlan] = useState({});

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, price, setPrice, plan, setPlan }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
