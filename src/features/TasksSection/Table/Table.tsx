import { FC, useMemo } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import { Priority, Task } from "../TasksSection.types"
import { StyledActions } from "./styles"
import Button from "../../../common/components/Button/Button"
import { Table as TableAntD, TableColumnsType, Tag } from "antd"
import TaskAction from "../TaskAction/TaskAction"

const PRIORITY_TO_COLOR_MAP = {
  [Priority.LOW]: "#378CE7",
  [Priority.MEDIUM]: "#FFC94A",
  [Priority.HIGH]: "#D04848",
}

const getColumns = (
  editHandler: (data: Omit<Task, "id"> & { id?: string }) => Promise<void>,
  onDelete: (id: string) => Promise<void>,
): TableColumnsType<Task> => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    fixed: "left",
    width: "18rem",
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
    width: "8rem",
    render: (priority: Priority) => <Tag color={PRIORITY_TO_COLOR_MAP[priority]}>{priority}</Tag>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "10rem",
  },
  {
    title: "Actions",
    dataIndex: "Actions",
    key: "Actions",
    fixed: "right",
    width: "11rem",
    render: (text: string, record: Task) => (
      <StyledActions>
        <TaskAction task={record} onSave={editHandler} />
        <Button
          data-testid={`button-delete-${record.id}`}
          label="Delete"
          onClick={async (e) => {
            onDelete(record.id)
          }}
        />
      </StyledActions>
    ),
  },
]

export interface TableProps extends PPCustomAttributes, PPAccessibility {
  tasks: Task[]
  onEdit: (data: Omit<Task, "id"> & { id?: string }) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

const Table: FC<TableProps> = ({ tasks, onEdit, onDelete, "data-testid": dataTestId }) => {
  const columns = useMemo(() => getColumns(onEdit, onDelete), [onEdit, onDelete])

  return (
    <TableAntD
      rowKey="id"
      data-testid={dataTestId}
      dataSource={tasks}
      columns={columns as any}
      pagination={{ pageSize: 8 }}
      bordered
      scroll={{ x: "max-content" }}
      style={{ maxHeight: "75%", overflowY: "auto" }}
    />
  )
}

export default Table
