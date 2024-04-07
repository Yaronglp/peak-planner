import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../types"
import { Input as InputAntD } from "antd"
import { ErrorLabel } from "./Styles"

// Label is prop to allow overload parameters in one place instead of manage multiple props
// In the future can add label position: up, left, right, down
type Label = {
  text: string
}

// The same as the Label Type comment
type Error = {
  text: string
}

export interface InputProps extends PPCustomAttributes, PPAccessibility {
  isRequired?: boolean
  placeHolder?: string
  label?: Label
  error?: Error
}

const Input: FC<InputProps> = ({ isRequired = false, placeHolder, label, error }) => {
  return (
    <div>
      {label && Object.keys(label).length > 0 && <label>{label.text}</label>}
      <InputAntD placeholder={placeHolder} required={isRequired} />
      {error && Object.keys(error).length > 0 && <ErrorLabel>{error.text}</ErrorLabel>}
    </div>
  )
}

export default Input
