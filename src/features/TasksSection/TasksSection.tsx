import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { StyledSection, StyledTable } from "./styles"
import { TASKS } from "./mock"
import TaskCreate from "./TaskCreate/TaskCreate"

const dataSource = [...TASKS]
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
]

export interface TasksProps extends PPCustomAttributes, PPAccessibility {}

const Tasks: FC<TasksProps> = ({}) => {
  return (
    <>
      <StyledSection>
        <TaskCreate />
      </StyledSection>
      <StyledTable dataSource={dataSource} columns={columns} />
    </>
  )
}

export default Tasks
