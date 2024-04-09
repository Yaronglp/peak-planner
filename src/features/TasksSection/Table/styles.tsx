import styled from "styled-components"
import { cssBoxShadow, cssFlexCenter } from "../../../common/styles"
import { Table } from "antd"

export const StyledTable = styled(Table)`
  width: 80vw;
  margin: 0 auto;
  ${cssBoxShadow};
`

export const StyledActions = styled.div`
  ${cssFlexCenter};
  justify-content: space-around;
`
