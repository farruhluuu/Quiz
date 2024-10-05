import { useDispatch } from 'react-redux';
import { DeleteTodo } from '../../store/action';
import { useState } from 'react';

const TodoItem = ({state}) => {
  const [isChangeValue, setIsChangeValue] = useState(state.isChange)

  const dispatch = useDispatch()

  const handleChange = () => {
    setIsChangeValue(!isChangeValue)
  }

  return (
    <div>
      <input type="checkbox" checked={isChangeValue} onChange={handleChange}/>
      <span style={isChangeValue ? {textDecoration: 'line-through'}: null}>{state.text}</span>
      <button disabled={!isChangeValue} onClick={() => dispatch(DeleteTodo(state.id))}>delete</button>
    </div>
  );
}

export default TodoItem;
