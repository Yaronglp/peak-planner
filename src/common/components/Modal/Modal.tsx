import { FC, MouseEventHandler, ReactNode } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../types"
import { Modal as ModalAntD } from "antd"

export interface ModalProps extends PPCustomAttributes, PPAccessibility {
  title: string
  isOpen: boolean
  children: ReactNode
  onCancelClick: MouseEventHandler<HTMLButtonElement>
  destroyOnClose?: boolean
  footer?: React.ReactNode
  onOKClick?: MouseEventHandler<HTMLButtonElement>
}

const Modal: FC<ModalProps> = ({ isOpen, title, footer, children, destroyOnClose, onOKClick, onCancelClick }) => {
  return (
    <ModalAntD
      destroyOnClose={destroyOnClose}
      open={isOpen}
      title={title}
      footer={footer}
      onOk={onOKClick}
      onCancel={onCancelClick}>
      {children}
    </ModalAntD>
  )
}

export default Modal
