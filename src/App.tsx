import Header from "./features/Header/Header"
import TasksSection from "./features/TasksSection/TasksSection"
import { FSMContextProvider } from "./finite-state-machine"
import { StyledMain } from "./styles"

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <FSMContextProvider>
          <TasksSection />
        </FSMContextProvider>
      </StyledMain>
    </>
  )
}

export default App
