import { FC, MouseEventHandler } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../types"
import { StyledButton } from "./styles"

enum Type {
  SUBMIT = "submit",
  BUTTON = "button",
}
export interface ButtonProps extends PPCustomAttributes, PPAccessibility {
  label: string
  type?: Type
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({
  type = Type.BUTTON,
  label,
  "aria-label": ariaLabel = label,
  onClick,
  "data-testid": dataTestId,
}) => {
  return (
    <StyledButton data-testid={dataTestId} aria-label={ariaLabel} onClick={onClick} htmlType={type}>
      {label}
    </StyledButton>
  )
}

export default Object.assign(Button, {
  Type,
}) as unknown as typeof Button & {
  Type: typeof Type
}
