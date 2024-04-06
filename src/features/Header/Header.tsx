import { FC, ReactNode } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { APP_NAME } from "../../common/constants"
import { StyledHeader } from "./styles"
import ThemeToggle from "./ThemeToggle/ThemeToggle"
import Profile from "./Profile/Profile"

export interface HeaderProps extends PPCustomAttributes, PPAccessibility {
  children?: ReactNode
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <StyledHeader>
      <ThemeToggle />
      <h1>{APP_NAME}</h1>
      <Profile />
    </StyledHeader>
  )
}

export default Header
