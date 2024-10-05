import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Dict from '../components/Dict'
import List from './../components/List';
import Home from './../components/Home';
import ToDo from './../components/ToDo';
import Error from '../components/Error';
import MySelectComponent from './../select/select';

function Router() {

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <header>
        <NavLink to={'ToDo'}>ToDo</NavLink>
        <NavLink to={'List'}>List</NavLink>
        <NavLink to={'Dict'}>Dict</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/ToDo" element={<ToDo/>}/>
        <Route path="/dict" element={<Dict/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <MySelectComponent />
    </BrowserRouter>
  )
}

export default Router