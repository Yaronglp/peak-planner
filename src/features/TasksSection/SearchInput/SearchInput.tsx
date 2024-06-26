import { PPAccessibility, PPCustomAttributes } from "../../../common/types"
import Input from "../../../common/components/Input/Input"
import Select from "../../../common/components/Select/Select"
import { ChangeEvent, FC, useState } from "react"
import { debounce } from "../../../common/utils"
import { Task } from "../TasksSection.types"

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
  onInputChange?: (txt: string, type: keyof Task) => void
}

const SearchInput: FC<SearchInputProps> = ({ onInputChange, "data-testid": dataTestId }) => {
  const [type, setType] = useState<keyof Pick<Task, "title" | "description">>(
    searchByOptions[0].value as keyof Pick<Task, "title" | "description">,
  )
  const [inputVal, setInputVal] = useState("")

  const onSelectChange = (type: keyof Pick<Task, "title" | "description">) => {
    setType(type)
    onInputChange && onInputChange(inputVal, type)
  }

  const selectAfter = (
    <Select
      data-testid="search-category"
      options={searchByOptions}
      defaultValue={searchByOptions[0].value}
      onSelectChange={onSelectChange}
    />
  )

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputVal(value)
    onInputChange && onInputChange(value, type)
  }

  return (
    <>
      <Input
        data-testid={dataTestId}
        addonAfter={selectAfter}
        onChange={debounce(onSearchInputChange)}
        placeHolder="Search Tasks..."
        isClear={true}
      />
    </>
  )
}

export default SearchInput
