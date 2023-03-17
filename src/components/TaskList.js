// import ListHeader from "./ListHeader";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

import styles from "../styles/TaskList.module.css";


export default function TaskList() {
    return (
        <div className={styles.task_list_box}>
            <h2>Pendentes</h2>
            <TaskForm/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </div> 
    ) 
}