import { useState } from "react"

import TaskItem from "./TaskItem"
import TaskForm from "./TaskForm"

import styles from "../styles/TaskList.module.css"

export default function TaskList() {
    const [tasks, setTasks] = useState([])
    const [notDoneCount, setNotDoneCount] = useState(0)
    const [doneCount, setDoneCount] = useState(0)
    const [inputText, setInputText] = useState("")

    // Find the task position in the tasks array using its id
    const getIndexById = (id) => {
        return tasks.findIndex(task => task.id === id)
    }

    // Put uncompleted tasks above and update the notDoneCount
    const sortTasks = (messyTasks) => {
        const doneTasks = messyTasks.filter((task) => task.isDone)
        const notDoneTasks = messyTasks.filter((task) => !task.isDone)
        setNotDoneCount(notDoneTasks.length)
        setDoneCount(doneTasks.length)
        const sortedTasks = [...notDoneTasks, ...doneTasks]
        return sortedTasks
    }

    const addTask = (task) => {
        let updatedTasks = [task, ...tasks]
        setTasks([...sortTasks(updatedTasks)])
    }

    const deleteTask = (id) => {
        let updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks([...sortTasks(updatedTasks)])
    }

    const toggleTaskCompletion = (id) => {
        let updatedTasks = [...tasks]
        const index = getIndexById(id)
        updatedTasks[index].isDone = !updatedTasks[index].isDone
        setTasks([...sortTasks(updatedTasks)])
    }

    const editTask = (id) => {
        const index = getIndexById(id)
        setInputText(tasks[index].text)
        deleteTask(id)
    }

    return (
        <div className={styles.task_list_box}>
            <h2>Pendentes ({notDoneCount}) / Concluídas ({doneCount})</h2>

            <TaskForm
                addTask={addTask}
                inputText={inputText}
            />

            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}