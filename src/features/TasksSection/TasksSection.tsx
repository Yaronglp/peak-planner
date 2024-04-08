import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { TableAdjustments, StyledTable } from "./styles"
import { TASKS } from "./mock"
import TaskCreate from "./TaskCreate/TaskCreate"
import TaskEdit from "./TaskEdit/TaskEdit"
import { Task } from "./TasksSection.types"
import { TableColumnsType } from "antd"
import SearchInput from "./SearchInput/SearchInput"

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
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "Actions",
    key: "Actions",
    render: (text: string, record: Task) => <TaskEdit task={record} />,
  },
]

export interface TasksProps extends PPCustomAttributes, PPAccessibility {}

const TasksSection: FC<TasksProps> = ({}) => {
  const onSearchChange = (txt: string) => {
    console.log(txt)
  }

  const onTaskCreate = (data: Omit<Task, "id">): void => {
    console.log(data)
  }

  return (
    <>
      <TableAdjustments>
        <SearchInput onInputChange={onSearchChange} />
        <TaskCreate onCreate={onTaskCreate} />
      </TableAdjustments>
      <StyledTable dataSource={dataSource} columns={columns as any} />
    </>
  )
}

export default TasksSection
