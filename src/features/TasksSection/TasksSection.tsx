import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { StyledSection, StyledTable } from "./styles"
import { TASKS } from "./mock"
import TaskCreate from "./TaskCreate/TaskCreate"
import TaskEdit from "./TaskEdit/TaskEdit"
import { Task } from "./TasksSection.types"
import { TableColumnsType } from "antd"

const dataSource = [...TASKS]
const columns: TableColumnsType<Task> = [
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
  {
    title: "Actions",
    dataIndex: "Actions",
    key: "Actions",
    render: (text: string, record: Task) => <TaskEdit task={record} />,
  },
]

export interface TasksProps extends PPCustomAttributes, PPAccessibility {}

const Tasks: FC<TasksProps> = ({}) => {
  return (
    <>
      <StyledSection>
        <TaskCreate />
      </StyledSection>
      <StyledTable dataSource={dataSource} columns={columns as any} />
    </>
  )
}

export default Tasks
