import { FC, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Button from "../../../common/components/Button/Button"
import Modal from "../../../common/components/Modal/Modal"
import TaskForm from "../TaskForm/TaskForm"
import { Task } from "../TasksSection.types"

export interface TaskEditProps extends PPCustomAttributes, PPAccessibility {
  task: Task
}

const TaskEdit: FC<TaskEditProps> = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOnClick = () => {
    setIsModalOpen((modal) => !modal)
  }

  const onSubmitHandler = (data: Omit<Task, "id">): void => {
    console.log(JSON.stringify(data))
  }

  return (
    <>
      <Button label="Edit" onClick={handleOnClick} />
      <Modal
        isOpen={isModalOpen}
        title={`Edit '${task.title}'`}
        footer={null}
        onCancelClick={() => setIsModalOpen((open) => !open)}>
        <TaskForm task={task} onSubmit={onSubmitHandler} />
      </Modal>
    </>
  )
}

export default TaskEdit
