import styles from "../styles/TaskItem.module.css";

import { Icon } from '@iconify/react';

export default function TaskItem({ task, toggleTaskCompletion, editTask, deleteTask }) {
    return (
        <div className={styles.task_item_box}>

            {task.isDone ?
                <button
                    className={styles.done_button}
                    title="Clique para marcar como não feito"
                    onClick={() => toggleTaskCompletion(task.id)}>
                    <Icon
                        className="icons"
                        icon="mdi:check-circle"
                    />
                </button>
                :
                <button
                    className={styles.not_done_button}
                    title="Clique para marcar como feito"
                    onClick={() => toggleTaskCompletion(task.id)}>
                    <Icon
                        className="icons"
                        icon="mdi:checkbox-blank-circle-outline"
                    />
                </button>
            }

            <p
                className={task.isDone ? styles.done_text : styles.not_done_text}>
                {task.text}
            </p>

            <button
                className={styles.edit_button}
                title="Editar tarefa"
                onClick={() => editTask(task.id)}>
                <Icon
                    className="icons"
                    icon="mdi:pencil"
                />
            </button>

            <button
                className={styles.delete_button}
                title="Deletar tarefa"
                onClick={() => deleteTask(task.id)}>
                <Icon
                    className="icons"
                    icon="mdi:delete"
                />
            </button>
        </div>
    )
}