import { FC, useContext, useState } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Button from "../../../common/components/Button/Button"
import Modal from "../../../common/components/Modal/Modal"
import { Task } from "../TasksSection.types"
import TaskForm from "../TaskForm/TaskForm"
import { FSMContext } from "../../../finite-state-machine"
import AlertMessage from "../../../common/components/AlertMessage/AlertMessage"
import { STATES } from "../../../machine/config"

export interface TaskActionProps extends PPCustomAttributes, PPAccessibility {
  onSave: (data: Omit<Task, "id"> & { id?: string }) => Promise<void>
  task?: Task
}

const TaskAction: FC<TaskActionProps> = ({ onSave, task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { machineState } = useContext(FSMContext)

  const onSubmitHandler = async (data: Omit<Task, "id"> & { id?: string }): Promise<void> => {
    await onSave(data as Task)
    setIsModalOpen(false)
  }

  const buttonLabel = task ? "Edit" : "Create New Task"

  return (
    <>
      <Button label={buttonLabel} onClick={() => setIsModalOpen((isOpen) => !isOpen)} />
      <Modal
        isOpen={isModalOpen}
        title={task ? `Edit '${task.title}'` : "Create New Task"}
        footer={null}
        destroyOnClose={true}
        onCancelClick={() => setIsModalOpen((open) => !open)}>
        {machineState === STATES.FAILURE_ACTION_TASK && (
          <AlertMessage message="Error saving task." type={AlertMessage.Type.ERROR} />
        )}
        <TaskForm task={task} onSubmit={onSubmitHandler} />
      </Modal>
    </>
  )
}

export default TaskAction
