import { FC, useContext, useEffect } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import { useForm, Controller } from "react-hook-form"
import { Priority, Status, Task } from "../TasksSection.types"
import Input from "../../../common/components/Input/Input"
import Button from "../../../common/components/Button/Button"
import { StyledForm } from "./styles"
import Select from "../../../common/components/Select/Select"
import { FSMContext } from "../../../finite-state-machine"
import { EVENTS, FSMachine, STATES } from "../../../machine/config"

export interface FormProps extends PPCustomAttributes, PPAccessibility {
  onSubmit: (data: Omit<Task, "id"> & { id?: string }) => Promise<void>
  task?: Task
}

const PriorityOptions: { value: string; label: string }[] = Object.values(Priority).map((priority) => ({
  value: priority,
  label: priority,
}))

const StatusOptions: { value: string; label: string }[] = Object.values(Status).map((status) => ({
  value: status,
  label: status,
}))

const TaskForm: FC<FormProps> = ({ task, onSubmit }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm({
    values: {
      title: task?.title || "",
      description: task?.description || "",
      priority: task?.priority || Priority.LOW,
      status: task?.status || Status.TODO,
    },
  })
  const { machineState, updateMachineState } = useContext(FSMContext)

  useEffect(() => {
    async function submitData(taskData: Task) {
      try {
        await onSubmit(taskData)
        reset()
        updateMachineState(FSMachine.transition(EVENTS.RESOLVE))
      } catch (e) {
        updateMachineState(FSMachine.transition(EVENTS.REJECT))
      }
    }

    if (machineState === STATES.TRIGGER_ACTION_TASK) {
      const taskData = getValues() as Task

      if (task) {
        taskData.id = task.id
      }
      submitData(taskData)
    }

    let timer: NodeJS.Timeout
    if (machineState === STATES.FAILURE_ACTION_TASK) {
      timer = setTimeout(() => {
        updateMachineState(FSMachine.transition(EVENTS.CANCEL))
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [machineState, getValues])

  return (
    <StyledForm
      onSubmit={handleSubmit(() => {
        updateMachineState(FSMachine.transition(EVENTS.EDIT))
      })}>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            data-testid="input-title-task"
            controlProp={field}
            label={{ text: "Title" }}
            placeHolder="title..."
            error={errors.title && { text: "This field is required" }}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            data-testid="input-description-task"
            controlProp={field}
            label={{ text: "Description" }}
            placeHolder="description..."
            error={errors.description && { text: "This field is required" }}
          />
        )}
      />
      <Controller
        name="priority"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            data-testid="input-priority-task"
            controlProp={field}
            label={{ text: "Priority" }}
            options={PriorityOptions}
            defaultValue={Priority.LOW}
            error={errors.priority && { text: "This field is required" }}
          />
        )}
      />
      <Controller
        name="status"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            data-testid="input-status-task"
            controlProp={field}
            label={{ text: "Status" }}
            options={StatusOptions}
            defaultValue={Status.TODO}
            error={errors.status && { text: "This field is required" }}
          />
        )}
      />
      <Button type={Button.Type.SUBMIT} label="Save" />
    </StyledForm>
  )
}

export default TaskForm
