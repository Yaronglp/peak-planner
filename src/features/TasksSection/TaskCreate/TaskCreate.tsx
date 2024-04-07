import { FC, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Button from "../../../common/components/Button/Button"
import Modal from "../../../common/components/Modal/Modal"
import { Task } from "../TasksSection.types"
import TaskForm from "../TaskForm/TaskForm"

export interface TaskCreateProps extends PPCustomAttributes, PPAccessibility {}

const TaskCreate: FC<TaskCreateProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOnClick = () => {
    setIsModalOpen((modal) => !modal)
  }

  const onSubmitHandler = (data: Omit<Task, "id">): void => {
    console.log(JSON.stringify(data))
  }

  return (
    <>
      <Button label="Create New Task" onClick={handleOnClick} />
      <Modal
        isOpen={isModalOpen}
        title="Create New Task"
        footer={null}
        onCancelClick={() => setIsModalOpen((open) => !open)}>
        <TaskForm onSubmit={onSubmitHandler} />
      </Modal>
    </>
  )
}

export default TaskCreate
