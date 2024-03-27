import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const todos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Hacer la comida', completed: false},
  {text: 'Llorar con la llorona', completed: false},

];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={3} total={5}/>
        <TodoSearch />
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}

        </TodoList>
        <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
