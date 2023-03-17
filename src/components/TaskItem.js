import styles from "../styles/TaskItem.module.css";

export default function TaskItem({ todo, doneTodoHandler, editTodo, deleteTodo }) {
    return (
        <div className={styles.task_item_box}>

            <button
                className={todo.isDone ? styles.done_button : styles.not_done_button}
                onClick={() => doneTodoHandler(todo.id)}>
                Feito
            </button>

            <p
                className={todo.isDone ? styles.done_text : styles.not_done_text}>
                {todo.text}
            </p>

            <button
                className={styles.edit_button}
                onClick={() => editTodo(todo.id)}>
                Editar
            </button>

            <button
                className={styles.delete_button}
                onClick={() => deleteTodo(todo.id)}>
                Deletar
            </button>
        </div>
    )
}