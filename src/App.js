import ButtonNew from './components/ButtonNew';
import TaskList from './components/TaskList';
import './Styles/App.css';

export default function App() {
  return (
    <>
      <div>
        <h1>Minhas Tarefas</h1>
        <ButtonNew />
      </div>
      <TaskList /> // TODO: Lista pendentes
      <TaskList /> // TODO: Lista concluidas
    </>
  );
}