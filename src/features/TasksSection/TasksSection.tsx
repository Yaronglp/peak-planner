import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { TableAdjustments, StyledTable } from "./styles"
import { TASKS } from "./mock"
import TaskCreate from "./TaskCreate/TaskCreate"
import TaskEdit from "./TaskEdit/TaskEdit"
import { Priority, Status, Task } from "./TasksSection.types"
import { TableColumnsType, Tag } from "antd"
import SearchInput from "./SearchInput/SearchInput"

const STATUS_TO_COLOR_MAP = {
  [Status.TODO]: "#7FC7D9",
  [Status.IN_PROGRESS]: "#9195F6",
  [Status.COMPLETED]: "#4CCD99",
}

const PRIORITY_TO_COLOR_MAP = {
  [Priority.LOW]: "#378CE7",
  [Priority.MEDIUM]: "#FFC94A",
  [Priority.HIGH]: "#D04848",
}

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
    render: (priority: Priority) => <Tag color={PRIORITY_TO_COLOR_MAP[priority]}>{priority}</Tag>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: Status) => <Tag color={STATUS_TO_COLOR_MAP[status]}>{status}</Tag>,
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
      <StyledTable dataSource={dataSource} columns={columns as any} pagination={{ pageSize: 8 }} />
    </>
  )
}

export default TasksSection
