import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Router from './routes/router'
import './main.css'
import { Provider } from 'react-redux'
import { store } from './store/store';
import Question from './question/question';
// import AddTodo from './components/Todo/AddTodo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Router /> */}
      {/* <AddTodo /> */}
      <Question />

    </Provider>
  </StrictMode>,
)
