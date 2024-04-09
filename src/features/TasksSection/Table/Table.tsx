import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import { Priority, Status, Task } from "../TasksSection.types"
import { StyledActions } from "./styles"
import TaskEdit from "../TaskEdit/TaskEdit"
import Button from "../../../common/components/Button/Button"
import { deleteTask } from "../../../services/api"
import { Table as TableAntD, TableColumnsType, Tag } from "antd"

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
    width: "20%",
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
    width: "10%",
    render: (priority: Priority) => <Tag color={PRIORITY_TO_COLOR_MAP[priority]}>{priority}</Tag>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "10%",
    render: (status: Status) => <Tag color={STATUS_TO_COLOR_MAP[status]}>{status}</Tag>,
  },
  {
    title: "Actions",
    dataIndex: "Actions",
    key: "Actions",
    width: "12%",
    render: (text: string, record: Task) => (
      <StyledActions>
        <TaskEdit task={record} />
        <Button
          label="Delete"
          onClick={async (e) => {
            const deletedItem: Task = await deleteTask(record.id)
            console.warn(`${deletedItem.title} was deleted.`)
          }}
        />
      </StyledActions>
    ),
  },
]

export interface TableProps extends PPCustomAttributes, PPAccessibility {
  tasks: Task[]
}

const Table: FC<TableProps> = ({ tasks }) => {
  return <TableAntD rowKey="id" dataSource={tasks} columns={columns as any} pagination={{ pageSize: 8 }} bordered />
}

export default Table
