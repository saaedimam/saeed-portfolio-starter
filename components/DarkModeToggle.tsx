"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle dark mode"
      className="rounded-full p-2 border border-black/10 dark:border-white/20 hover:scale-105 transition"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
