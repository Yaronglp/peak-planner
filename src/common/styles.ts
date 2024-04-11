import { css } from "styled-components"

export const cssFlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const cssBoxShadow = css`
  box-shadow: 0 0 4px var(--black);
`

export const cssErrorLabel = css`
  color: var(--red);
  font-weight: bold;
`

export const cssCenterPosition = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
