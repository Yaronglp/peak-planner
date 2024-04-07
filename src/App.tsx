import "./App.css"
import AdjustmentsBar from "./features/AdjustmentsBar/AdjustmentsBar"
import Header from "./features/Header/Header"
import Tasks from "./features/Tasks/Tasks"

function App() {
  return (
    <>
      <Header />
      <main>
        <AdjustmentsBar />
        <Tasks />
      </main>
    </>
  )
}

export default App
