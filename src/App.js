import './App.css';
import CreateTodoList from './components/CreateTodoList';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <CreateTodoList />
      <TodoList />
    </div>
  );
}

export default App;
