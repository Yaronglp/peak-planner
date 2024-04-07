import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import TaskCreate from "./TaskCreate/TaskCreate"

export interface AdjustmentsBarProps extends PPCustomAttributes, PPAccessibility {}

const AdjustmentsBar: FC<AdjustmentsBarProps> = ({}) => {
  return <TaskCreate />
}

export default AdjustmentsBar
