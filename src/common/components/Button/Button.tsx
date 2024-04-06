import { FC, MouseEventHandler } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"

export interface ButtonProps extends PPCustomAttributes, PPAccessibility {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ label, "aria-label": ariaLabel, onClick }) => {
  return (
    <button aria-label={ariaLabel} type="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
