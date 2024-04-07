import { FC, ReactNode } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { APP_NAME } from "../../common/constants"
import { StyledHeader, StyledTitle } from "./styles"

export interface HeaderProps extends PPCustomAttributes, PPAccessibility {
  children?: ReactNode
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <StyledHeader>
      <StyledTitle>{APP_NAME}</StyledTitle>
    </StyledHeader>
  )
}

export default Header
