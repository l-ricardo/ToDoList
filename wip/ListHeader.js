// import ButtonNew from "./ButtonNew";

// import styles from "../styles/TaskItem.module.css";
// import styles from "../styles/TaskList.module.css";
import './styles/index.css';



export default function ListHeader(listName) {
    return (
        <div className={styles.ListHeader}>
            <h2>{listName}</h2> 
        </div>
    )
}