import { FC, useCallback, useEffect, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { TableAdjustments } from "./styles"
import TaskCreate from "./TaskCreate/TaskCreate"
import { Task } from "./TasksSection.types"
import SearchInput from "./SearchInput/SearchInput"
import { createTask, deleteTask, editTask, getTasks } from "../../services/api"
import Table from "./Table/Table"

export interface TasksProps extends PPCustomAttributes, PPAccessibility {}

const TasksSection: FC<TasksProps> = ({}) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksToPresent, setTasksToPresent] = useState<Task[]>([])

  const onSearchChange = (txt: string, byType: keyof Task) => {
    // Casting to string as the byType is supporting only string types currently
    setTasksToPresent(tasks.filter((task: Task) => (task[byType] as string).toLowerCase().includes(txt.toLowerCase())))
  }

  const updateTasks = useCallback(
    (tasks: Task[]) => {
      setTasksToPresent(tasks)
      setTasks(tasks)
    },
    [tasks],
  )

  const onTaskCreate = useCallback(
    async (taskData: Omit<Task, "id">) => {
      const createdTask = await createTask(taskData)
      const newTasks = [...tasks, createdTask]
      updateTasks(newTasks)
    },
    [tasks],
  )

  const onTaskEdit = useCallback(
    async (taskData: Task) => {
      const editedTask = await editTask(taskData)
      const taskIndex = tasks.findIndex((task: Task) => task.id === editedTask.id)
      tasks.splice(taskIndex, 1, editedTask)
      updateTasks([...tasks])
    },
    [tasks],
  )

  const onTaskDelete = useCallback(
    async (id: string) => {
      const { id: taskID } = await deleteTask(id)
      const taskIndex = tasks.findIndex((task: Task) => task.id === taskID)
      tasks.splice(taskIndex, 1)
      updateTasks([...tasks])
    },
    [tasks],
  )

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
      <Table tasks={tasksToPresent} onEdit={onTaskEdit} onDelete={onTaskDelete} />
    </>
  )
}

export default TasksSection
