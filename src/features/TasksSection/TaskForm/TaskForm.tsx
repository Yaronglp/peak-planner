import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import { useForm, Controller } from "react-hook-form"
import { Priority, Status, Task } from "../TasksSection.types"
import Input from "../../../common/components/Input/Input"
import Button from "../../../common/components/Button/Button"
import { StyledForm } from "./styles"
import Select from "../../../common/components/Select/Select"

export interface FormProps extends PPCustomAttributes, PPAccessibility {
  onSubmit: (data: Omit<Task, "id"> & { id?: string }) => void
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
  } = useForm({
    values: {
      title: task?.title || "",
      description: task?.description || "",
      priority: task?.priority || Priority.LOW,
      status: task?.status || Status.TODO,
    },
  })

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => {
        onSubmit(data)
        reset()
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
      <Controller
        name="status"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
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
