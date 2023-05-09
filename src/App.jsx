import React, { Component, useState} from 'react'
import Home from './views/Home';
import TodoPage from './views/TodoPage';
import ResponsiveAppBar from './components/Appbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user,setUser] = useState({username:"Tyler"})

  return (
    <div>
    <ResponsiveAppBar user={user} />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/todo' element={<TodoPage />}/>
    </Routes>
    </div>
  )
}

