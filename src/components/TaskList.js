import ListHeader from "./ListHeader";
import TaskItem from "./TaskItem";

export default function TaskList() {
    return (
        <div className="task-list-box">
            <ListHeader />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    )
}