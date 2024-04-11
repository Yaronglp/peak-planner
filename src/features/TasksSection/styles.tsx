import styled from "styled-components"
import { cssCenterPosition, cssFlexCenter } from "../../common/styles"

export const TableAdjustments = styled.section`
  ${cssFlexCenter};
  margin: 2rem 0;
  gap: 1.5rem;
  justify-content: space-between;
`

export const StyledError = styled.div`
  ${cssCenterPosition};
  color: var(--red);
  font-size: 1.5rem;
  font-weight: bold;
`
