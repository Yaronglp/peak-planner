import { Table } from "antd"
import styled from "styled-components"
import { cssBoxShadow, cssFlexCenter } from "../../common/styles"

export const TableAdjustments = styled.section`
  ${cssFlexCenter};
  margin: 2rem 0;
  gap: 1.5rem;
`

export const StyledTable = styled(Table)`
  width: 80vw;
  margin: 0 auto;
  ${cssBoxShadow};
`
