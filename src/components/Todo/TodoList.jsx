import TodoItem from './TodoItem';

const TodoList = ({todos}) => {

  return (
    <div>
      {
        todos.map(
          (item) => <TodoItem key={item.id} state={item}/>
        )
      }
    </div>
  );
}

export default TodoList;
