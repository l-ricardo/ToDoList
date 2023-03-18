import styles from "../styles/TaskItem.module.css";

import { Icon } from '@iconify/react';

export default function TaskItem({ todo, doneTodoHandler, editTodo, deleteTodo }) {
    return (
        <div className={styles.task_item_box}>

            {todo.isDone ?
                <button
                    className={styles.done_button}
                    title="Clique para marcar como não feito"
                    onClick={() => doneTodoHandler(todo.id)}>
                    <Icon
                        className="icons"
                        icon="mdi:check-circle"
                    />
                </button>
                :
                <button
                    className={styles.not_done_button}
                    title="Clique para marcar como feito"
                    onClick={() => doneTodoHandler(todo.id)}>
                    <Icon
                        className="icons"
                        icon="mdi:checkbox-blank-circle-outline"
                    />
                </button>
            }

            <p
                className={todo.isDone ? styles.done_text : styles.not_done_text}>
                {todo.text}
            </p>

            <button
                className={styles.edit_button}
                title="Editar tarefa"
                onClick={() => editTodo(todo.id)}>
                <Icon
                    className="icons"
                    icon="mdi:pencil"
                />
            </button>

            <button
                className={styles.delete_button}
                title="Deletar tarefa"
                onClick={() => deleteTodo(todo.id)}>
                <Icon
                    className="icons"
                    icon="mdi:delete"
                />
            </button>
        </div>
    )
}