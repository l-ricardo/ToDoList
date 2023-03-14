import ButtonDelete from "./ButtonDelete";
import ButtonDone from "./ButtonDone";
import ButtonEdit from "./ButtonEdit";

export default function TaskItem() {
    return (
        <div className="task-item-box">
            <ButtonDone/> // TODO:
            <p>Essa é a descrição de um tarefa</p>
            <ButtonEdit/> // TODO:
            <ButtonDelete/> // TODO:
        </div>
    )
}