import styled from "styled-components"
import { cssErrorLabel } from "../../styles"
import { Select } from "antd"

export const ErrorLabel = styled.label`
  ${cssErrorLabel}
`

export const StyledLabel = styled.label`
  display: block;
`

export const StyledSelect = styled(Select)`
  min-width: 10rem;
`
