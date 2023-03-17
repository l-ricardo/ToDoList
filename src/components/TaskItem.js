import styles from "../styles/TaskItem.module.css";

export default function TaskItem({ todo, deleteTodo, doneTodoHandler }) {
    return (
        <div className={styles.task_item_box}>
            <button className={styles.done_button}
                onClick={() => doneTodoHandler(todo.id)}
            >Feito</button>

            {todo.isDone ?
                <p className="done">{todo.text}</p>
                :
                <p className="not_done">{todo.text}</p>
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