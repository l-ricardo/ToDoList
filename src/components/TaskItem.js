import styles from "../styles/TaskItem.module.css";

export default function TaskItem({ todo }) {
    return (
        <div className={styles.task_item_box}>
            <button className={styles.done_button} >Feito</button>
            <p>{todo.text}</p>
            <button className={styles.edit_button} >Editar</button>
            <button className={styles.delete_button} >Deletar</button>
        </div>
    )
}