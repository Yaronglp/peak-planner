import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import { useForm, Controller } from "react-hook-form"
import { Priority, Task } from "../TasksSection.types"
import Input from "../../../common/components/Input/Input"
import Button from "../../../common/components/Button/Button"
import { StyledForm } from "./styles"
import Select from "../../../common/components/Select/Select"

export interface FormProps extends PPCustomAttributes, PPAccessibility {
  onSubmit: (data: Omit<Task, "id">) => void
  task?: Task
}

const PriorityOptions: { value: string; label: string }[] = Object.values(Priority).map((priority) => ({
  value: priority,
  label: priority,
}))

const TaskForm: FC<FormProps> = ({ task, onSubmit }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      priority: task?.priority || Priority.LOW,
    },
  })

  // TODO: handle reset functionality on exit

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => {
        onSubmit(data as Omit<Task, "id">)
      })}>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
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
            controlProp={field}
            label={{ text: "Priority" }}
            options={PriorityOptions}
            defaultValue={Priority.LOW}
            error={errors.priority && { text: "This field is required" }}
          />
        )}
      />
      <Button type={Button.Type.SUBMIT} label="Save" />
    </StyledForm>
  )
}

export default TaskForm
