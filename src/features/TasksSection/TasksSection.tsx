import { FC, useEffect, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { TableAdjustments, StyledTable } from "./styles"
import TaskCreate from "./TaskCreate/TaskCreate"
import TaskEdit from "./TaskEdit/TaskEdit"
import { Priority, Status, Task } from "./TasksSection.types"
import { TableColumnsType, Tag } from "antd"
import SearchInput from "./SearchInput/SearchInput"
import { getTasks } from "../../services/api"

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
  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksToPresent, setTasksToPresent] = useState<Task[]>([])

  const onSearchChange = (txt: string, byType: keyof Task) => {
    // There is a casting to string as the byType is supporting only string types currently
    setTasksToPresent(tasks.filter((task: Task) => (task[byType] as string).toLowerCase().includes(txt.toLowerCase())))
  }

  const onTaskCreate = (data: Omit<Task, "id">): void => {
    console.log(data)
  }

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await getTasks()

      setTasks(tasks)
      setTasksToPresent(tasks)
    }

    fetchTasks()
  }, [])

  return (
    <>
      <TableAdjustments>
        <SearchInput onInputChange={onSearchChange} />
        <TaskCreate onCreate={onTaskCreate} />
      </TableAdjustments>
      <StyledTable dataSource={tasksToPresent} columns={columns as any} pagination={{ pageSize: 8 }} />
    </>
  )
}

export default TasksSection
