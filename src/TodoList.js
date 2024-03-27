import'./TodoList.css';


function TodoList(props) {
  return (
    <div class="container-list">
      <div class="contenido2">
        <ul class="list">
          {props.children}
        </ul>
      </div>
    </div>
  );
}
export { TodoList };
