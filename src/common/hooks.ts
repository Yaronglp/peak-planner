import { useState, useEffect } from "react"
import { ThemeColor } from "./types"

const LS_THEME_COLOR = "themeColor"

export const useThemeColor = (): ThemeColor => {
  const [ThemeColor, setThemeColor] = useState<ThemeColor>("light")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)")
    const handleChange = (e: MediaQueryListEvent) => {
      const themeMatch = e.matches ? "light" : "dark"
      setThemeColor(themeMatch)
      try {
        localStorage.setItem(LS_THEME_COLOR, themeMatch)
      } catch (e: unknown) {
        console.error("Unable to reach localStorage.")

        if (e instanceof Error) {
          console.error(e.message)
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return ThemeColor
}
