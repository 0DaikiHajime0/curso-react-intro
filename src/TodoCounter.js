import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
     <div>
        <h1>Todo app</h1>
        <h2> {completed} de {total} ToDos Completados!</h2>
     </div>
    );
  }

  export {TodoCounter};