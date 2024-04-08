import styled from "styled-components"
import { cssBoxShadow, cssFlexCenter } from "../../common/styles"

export const StyledHeader = styled.header`
  ${cssFlexCenter};
  ${cssBoxShadow};
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 1000;
  background: var(--white);
  position: fixed;
  top: 0;
  width: 100vw;
  height: var(--head-spacer);
  box-sizing: border-box;
`

export const StyledTitle = styled.h1`
  margin: 0 auto;
`
