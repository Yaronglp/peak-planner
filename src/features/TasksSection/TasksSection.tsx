import { FC, useEffect, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { TableAdjustments } from "./styles"
import TaskCreate from "./TaskCreate/TaskCreate"
import { Task } from "./TasksSection.types"
import SearchInput from "./SearchInput/SearchInput"
import { createTask, getTasks } from "../../services/api"
import Table from "./Table/Table"

export interface TasksProps extends PPCustomAttributes, PPAccessibility {}

const TasksSection: FC<TasksProps> = ({}) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksToPresent, setTasksToPresent] = useState<Task[]>([])

  const onSearchChange = (txt: string, byType: keyof Task) => {
    // Casting to string as the byType is supporting only string types currently
    setTasksToPresent(tasks.filter((task: Task) => (task[byType] as string).toLowerCase().includes(txt.toLowerCase())))
  }

  const onTaskCreate = async (taskData: Omit<Task, "id">) => {
    const createdTask = await createTask(taskData)
    const newTasks = [...tasks, createdTask]
    setTasksToPresent(newTasks)
    setTasks(newTasks)
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
      <Table tasks={tasksToPresent} />
    </>
  )
}

export default TasksSection
