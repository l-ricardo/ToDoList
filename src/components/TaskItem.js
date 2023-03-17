import styles from "../styles/TaskItem.module.css";

export default function TaskItem() {
    return (
        <div className={styles.task_item_box}>
            <button className={styles.done_button} >Feito</button>

            <p>Esse é um teste da descircao da tarefa</p>
            <button className={styles.edit_button} >Editar</button>
            <button className={styles.delete_button} >Deletar</button>
        </div>
    )
}