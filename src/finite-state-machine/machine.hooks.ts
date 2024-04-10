import { useEffect, useState } from "react"
import { Machine } from "./machine"

export const useMachine = (machine: Machine) => {
  const [value, setValue] = useState(machine.getState())

  useEffect(() => {
    setValue(machine.getState())
  }, [machine.getState()])

  return value
}
