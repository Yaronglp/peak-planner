import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import { useForm } from "react-hook-form"
import { Task } from "../../Tasks/Tasks.types"
import Input from "../../../common/components/Input/Input"
import Button from "../../../common/components/Button/Button"
import { StyledForm } from "./styles"
import { toPascalCase } from "../../../common/utils"

export interface FormProps extends PPCustomAttributes, PPAccessibility {
  task?: Task
}

const TaskForm: FC<FormProps> = ({ task }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      priority: "",
    },
  })

  console.warn(watch("title"))

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data))
      })}>
      <Input
        label={{ text: toPascalCase("title") }}
        placeHolder="title..."
        error={errors.description && { text: "This field is required" }}
        {...register("title", { required: true })}
      />
      <Input
        label={{ text: toPascalCase("description") }}
        placeHolder="description..."
        error={errors.description && { text: "This field is required" }}
        {...register("description", { required: true })}
      />
      <Button type={Button.Type.SUBMIT} label={task ? "Update" : "Create"} />
    </StyledForm>
  )
}

export default TaskForm
