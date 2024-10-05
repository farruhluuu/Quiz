import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

import TodoList from './TodoList'
import { AddNewTodo } from './../../store/action'

const AddTodo = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  
  const todos = useSelector((state) => state.todos)

  const handleSubmit = (event) => {
    if(text !== '') {
      event.preventDefault()
      dispatch(AddNewTodo(text))
      setText('')
    }
    else {
      alert('Напиши задание')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Todo</h1>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}  // Сохраняем новое значение текста
        />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} />  {/* Передаём список todos в компонент TodoList */}
    </div>
  )
}

export default AddTodo;
