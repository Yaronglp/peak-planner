import { FC, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Button from "../../../common/components/Button/Button"
import Modal from "../../../common/components/Modal/Modal"
import TaskForm from "../Form/TaskForm"

export interface TaskCreateProps extends PPCustomAttributes, PPAccessibility {}

const TaskCreate: FC<TaskCreateProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOnClick = () => {
    setIsModalOpen((modal) => !modal)
  }

  return (
    <>
      <Button label="+" onClick={handleOnClick} />
      <Modal
        isOpen={isModalOpen}
        title="Create New Task"
        footer={null}
        onCancelClick={() => setIsModalOpen((open) => !open)}>
        <TaskForm />
      </Modal>
    </>
  )
}

export default TaskCreate
