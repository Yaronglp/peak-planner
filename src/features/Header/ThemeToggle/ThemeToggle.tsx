import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"

export interface ThemeToggleProps extends PPCustomAttributes, PPAccessibility {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  return <h1>theme toggle</h1>
}

export default ThemeToggle
