import Header from "./features/Header/Header"
import TasksSection from "./features/TasksSection/TasksSection"
import { StyledMain } from "./finite-state-machine/styles"

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <TasksSection />
      </StyledMain>
    </>
  )
}

export default App
