import { FC } from "react"
import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Button from "../../../common/components/Button/Button"

export interface ProfileProps extends PPCustomAttributes, PPAccessibility {}

const Profile: FC<ProfileProps> = ({}) => {
  return <div>Profile</div>
}

export default Profile
