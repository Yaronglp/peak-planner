import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Button from "../../../common/components/Button/Button"

export interface ProfileProps extends PPCustomAttributes, PPAccessibility {}

const Profile: FC<ProfileProps> = ({}) => {
  return <Button label="Profile" />
}

export default Profile
