import { useState, useEffect } from "react"

const LS_THEME = "theme"

export type Theme = "light" | "dark"

const getThemeFromLS = (): string => {
  let theme = "light"

  try {
    theme = localStorage.getItem(LS_THEME) || "light"
  } catch (e: unknown) {
    console.error("Unable to reach localStorage.")
  }

  return theme
}

const setThemeToLS = (themeToSave: string) => {
  try {
    localStorage.setItem(LS_THEME, themeToSave)
  } catch (e: unknown) {
    console.error("Unable to reach localStorage.")

    if (e instanceof Error) {
      console.error(e.message)
    }
  }
}

export const useTheme = (): [Theme, React.Dispatch<React.SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>(getThemeFromLS() as Theme)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)")

    const handleChange = (e: MediaQueryListEvent) => {
      const themeFromLS = getThemeFromLS()

      // In case Theme was already set on LS
      if (themeFromLS) {
        return
      }

      const themeMatch = e.matches ? "light" : "dark"
      setTheme(themeMatch)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    setThemeToLS(theme)
    document.querySelector("body")?.setAttribute("data-theme", theme)
  }, [theme])

  return [theme, setTheme]
}
