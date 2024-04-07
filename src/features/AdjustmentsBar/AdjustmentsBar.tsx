import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import TaskCreate from "./TaskCreate/TaskCreate"
import { StyledSection } from "./styles"

export interface AdjustmentsBarProps extends PPCustomAttributes, PPAccessibility {}

const AdjustmentsBar: FC<AdjustmentsBarProps> = ({}) => {
  return (
    <StyledSection>
      <TaskCreate />
    </StyledSection>
  )
}

export default AdjustmentsBar
