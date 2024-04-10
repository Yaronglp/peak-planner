import { ReactNode, createContext, useCallback, useState } from "react"

export interface FSMContextProps {
  children: ReactNode
}

interface FSMContext {
  machineState: string
  updateMachineState: (state: string) => void
}

const INITIAL_STATE: FSMContext = {
  machineState: "Init",
  updateMachineState: (state: string) => {
    state
  },
} as const

export const FSMContext = createContext(INITIAL_STATE)

export const FSMContextProvider = ({ children }: FSMContextProps) => {
  const [machineState, setMachineState] = useState(INITIAL_STATE.machineState)

  const updateMachineState = useCallback((newState: string) => {
    setMachineState(newState)
  }, [])

  return <FSMContext.Provider value={{ machineState, updateMachineState }}>{children}</FSMContext.Provider>
}
