import { useState, useEffect } from "react"

import { Icon } from '@iconify/react';

import styles from "../styles/TaskItem.module.css"

export default function TaskForm({ addTodo, inputText }) {
    const [text, setText] = useState(inputText)
    const [id, setId] = useState(0)

    useEffect(() => { setText(inputText) }, [inputText])

    // Creates a new todo object, updates the id and add it to the todos array
    const newTodo = (text) => {
        const todo = {
            text: text,
            isDone: false,
            id: id
        }
        setId(id + 1)
        addTodo(todo)
    }

    const submitHandler = () => {
        newTodo(text)
        setText("")
    }

    return (
        <div className={styles.task_item_box}>
            <input
                id="input"
                type="text"
                maxLength={80}
                value={text}
                placeholder="Nova tarefa"
                onChange={(e) => setText(e.target.value)}>
            </input>
            <button
                className={styles.add_button}
                title="Salvar tarefa"
                onClick={submitHandler}>
                <Icon
                    className="icons"
                    icon="mdi:content-save"
                />
            </button>
        </div>
    )
}
