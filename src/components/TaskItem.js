import styles from "../styles/TaskItem.module.css";

export default function TaskItem({ todo, deleteTodo, doneTodoHandler }) {
    return (
        <div className={styles.task_item_box}>
            <button className={styles.done_button}
                onClick={() => doneTodoHandler(todo.id)}
            >Feito</button>

            {todo.isDone ?
                <p className={styles.done_text}>{todo.text}</p>
                :
                <p className={styles.not_done_text}>{todo.text}</p>
            }

            <button className={styles.edit_button} >Editar</button>

            <button
                className={styles.delete_button}
                onClick={() => deleteTodo(todo.id)}>
                Deletar
            </button>
        </div>
    )
}