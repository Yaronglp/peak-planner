import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Input from "../../../common/components/Input/Input"
import Select from "../../../common/components/Select/Select"
import { ChangeEvent, FC, useState } from "react"
import { debounce } from "../../../common/utils"

const searchByOptions = [
  {
    value: "title",
    label: "title",
  },
  {
    value: "description",
    label: "description",
  },
]

export interface SearchInputProps extends PPCustomAttributes, PPAccessibility {
  onInputChange?: (txt: string) => void
}

const selectAfter = <Select options={searchByOptions} defaultValue={searchByOptions[0].value} />

const SearchInput: FC<SearchInputProps> = ({ onInputChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onInputChange && onInputChange(value)
  }

  return (
    <>
      <Input addonAfter={selectAfter} onChange={debounce(onChange)} placeHolder="Search Tasks..." isClear={true} />
    </>
  )
}

export default SearchInput
