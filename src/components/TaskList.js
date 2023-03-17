import { useState } from "react";

import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

import styles from "../styles/TaskList.module.css";


export default function TaskList() {
    const [todos, setTodos] = useState([])

    // Find the tasks position at the todos array using its id
    const getIndexById = (id) => {
        return todos.findIndex(todo => todo.id === id);
    }

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
        let updatedTodos = todos.filter((todo) => todo.id !== id)

        setTodos(updatedTodos)
    }

    const doneTodoHandler = (id) => {
        let updatedTodos = [...todos]
        const index = getIndexById(id)

        updatedTodos[index].isDone = !updatedTodos[index].isDone
        setTodos(updatedTodos)
    }

    const editTodo = (id)=>{
        const index = getIndexById(id)

        // TODO: Checar se essa gambiarra que serve ao proposito e é suficiente
        document.getElementById("input").value = todos[index].text
        deleteTodo(id)
        // TODO: Pegar um href pra centralizar a tela com a caixa de texto
    }

    return (
        <div className={styles.task_list_box}>
            <h2>Pendentes ({todos.length})</h2>

            <TaskForm addTodo={addTodo} />

            {todos.map((todo) => (
                <TaskItem
                    key={todo.id}
                    todo={todo}
                    doneTodoHandler={doneTodoHandler}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    )
}