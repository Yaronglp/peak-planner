import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"

export interface ButtonProps extends PPCustomAttributes, PPAccessibility {
  label: string
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>
}

export default Button
