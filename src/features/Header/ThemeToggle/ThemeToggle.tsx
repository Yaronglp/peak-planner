import { FC, useCallback, useEffect, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Button from "../../../common/components/Button/Button"
import { Theme, useTheme } from "./ThemeToggle.hooks"

export interface ThemeToggleProps extends PPCustomAttributes, PPAccessibility {}

const getOppositeTheme = (theme: Theme): Theme => {
  return (theme === "dark" ? "light" : "dark") as Theme
}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const [buttonLabel, setButtonLabel] = useState("")
  const [theme, setTheme] = useTheme()

  useEffect(() => {
    setButtonLabel(`Change to ${getOppositeTheme(theme)} theme`)
  }, [])

  const onToggleClick = useCallback(() => {
    const oppositeTheme = getOppositeTheme(theme)
    const newLabel = `Change to ${theme} theme`

    setTheme(oppositeTheme as Theme)
    setButtonLabel(newLabel)
  }, [theme])

  return <Button label={buttonLabel} aria-label={buttonLabel} onClick={onToggleClick} />
}

export default ThemeToggle
