import TaskList from "./components/TaskList"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import "./styles/App.css"

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>Minhas tarefas</h1>
      <TaskList />
    </>
  )
}