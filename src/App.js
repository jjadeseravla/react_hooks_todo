import React, {useState} from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
       {
         text: "Learn about React",
         isCompleted: false
       },
       {
         text: "Meet friend for lunch",
         isCompleted: false
       },
       {
         text: "Build really cool todo app",
         isCompleted: false
       }
     ]);


    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    }

    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    }

    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}
        list={todos}
        />
      </div>
    </div>
  );
}

export default App;
