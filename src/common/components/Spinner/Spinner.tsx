import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import { StyledSpin } from "./styles"

enum Size {
  SMALL = "small",
  LARGE = "large",
}

export interface SpinnerProps extends PPCustomAttributes, PPAccessibility {
  size?: Size
}

const Spinner: FC<SpinnerProps> = ({ size = Size.LARGE }) => {
  return <StyledSpin size={size} />
}

export default Object.assign(Spinner, {
  Size,
}) as unknown as typeof Spinner & {
  Size: typeof Size
}
