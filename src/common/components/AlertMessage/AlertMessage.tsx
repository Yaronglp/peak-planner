import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import { Alert } from "antd"

enum Type {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export interface AlertMessageProps extends PPCustomAttributes, PPAccessibility {
  message: string
  type: Type
}

const AlertMessage: FC<AlertMessageProps> = ({ message, type }) => {
  return <Alert message={message} type={type} closable />
}

export default Object.assign(AlertMessage, {
  Type,
}) as unknown as typeof AlertMessage & {
  Type: typeof Type
}
