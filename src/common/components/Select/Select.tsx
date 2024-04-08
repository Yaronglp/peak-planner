import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../types"
import { ErrorLabel, StyledLabel, StyledSelect } from "./Styles"

// Label is prop to allow overload parameters in one place instead of manage multiple props
// In the future can add label position: up, left, right, down
type Label = {
  text: string
}

// The same as the Label Type comment
type Error = {
  text: string
}

export interface SelectProps extends PPCustomAttributes, PPAccessibility {
  options: { value: string; label: string }[]
  defaultValue?: string
  label?: Label
  error?: Error
  onSelectChange?: (value: any) => void
  // Should be optimized and consume as interface
  controlProp?: any
}

const Select: FC<SelectProps> = ({ options, defaultValue, label, error, onSelectChange, controlProp }) => {
  return (
    <div>
      {label && Object.keys(label).length > 0 && <StyledLabel>{label.text}</StyledLabel>}
      <StyledSelect options={options} defaultValue={defaultValue} onSelect={onSelectChange} {...controlProp} />
      {error && Object.keys(error).length > 0 && <ErrorLabel>{error.text}</ErrorLabel>}
    </div>
  )
}

export default Select
