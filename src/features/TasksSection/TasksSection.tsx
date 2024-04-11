import { FC, useCallback, useContext, useEffect, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../common/types"
import { StyledError, TableAdjustments } from "./styles"
import { Task } from "./TasksSection.types"
import SearchInput from "./SearchInput/SearchInput"
import { createTask, deleteTask, editTask, getTasks } from "../../services/api"
import Table from "./Table/Table"
import { EVENTS, FSMachine, STATES } from "../../machine/config"
import Spinner from "../../common/components/Spinner/Spinner"
import { FSMContext } from "../../finite-state-machine"
import TaskAction from "./TaskAction/TaskAction"

export interface TasksProps extends PPCustomAttributes, PPAccessibility {}

const TasksSection: FC<TasksProps> = ({}) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksToPresent, setTasksToPresent] = useState<Task[]>([])
  const { machineState, updateMachineState } = useContext(FSMContext)

  useEffect(() => {
    async function fetchTasks() {
      if (FSMachine.getState() === STATES.INIT) {
        updateMachineState(FSMachine.transition(EVENTS.SWITCH))
      }
      let tasks: any
      try {
        // The promise and the 'any' type is only for the example of the timeout (for loader)
        tasks = await new Promise((resolve) =>
          setTimeout(async () => {
            const tasks = await getTasks()
            resolve(tasks)
          }, 2000),
        )
        updateMachineState(FSMachine.transition(EVENTS.RESOLVE))
      } catch (e) {
        updateMachineState(FSMachine.transition(EVENTS.REJECT))
      }
      setTasks(tasks)
      setTasksToPresent(tasks)
    }

    fetchTasks()
  }, [])

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
    async (taskData: Omit<Task, "id"> & { id?: string }) => {
      const editedTask = await editTask(taskData as Task)
      const taskIndex = tasks.findIndex((task: Task) => task.id === editedTask.id)
      tasks.splice(taskIndex, 1, editedTask)
      updateTasks([...tasks])
    },
    [tasks],
  )

  const onTaskDelete = useCallback(
    async (id: string) => {
      try {
        updateMachineState(FSMachine.transition(EVENTS.DELETE))
        const { id: taskID } = await deleteTask(id)
        const taskIndex = tasks.findIndex((task: Task) => task.id === taskID)
        tasks.splice(taskIndex, 1)
        updateTasks([...tasks])
        updateMachineState(FSMachine.transition(EVENTS.RESOLVE))
      } catch (e) {
        updateMachineState(FSMachine.transition(EVENTS.REJECT))
      }
    },
    [tasks],
  )

  return (
    <>
      {machineState === STATES.FETCH && <Spinner />}
      {/* // In failure action we can fetch latest LS data and save every step to there */}
      {machineState === STATES.FAILURE_VIEW && <StyledError>Something went wrong, try again</StyledError>}
      {machineState !== STATES.FETCH && machineState !== STATES.FAILURE_VIEW && (
        <>
          <TableAdjustments>
            <SearchInput data-test-id="search-input" onInputChange={onSearchChange} />
            <TaskAction onSave={onTaskCreate} />
          </TableAdjustments>
          <Table data-test-id="table-tasks" tasks={tasksToPresent} onEdit={onTaskEdit} onDelete={onTaskDelete} />
        </>
      )}
    </>
  )
}

export default TasksSection
