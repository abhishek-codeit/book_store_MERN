import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBook from './pages/CreateBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import EditBook from './pages/EditBook.jsx'
import Home from './pages/Home.jsx'
import ShowBook from './pages/ShowBook.jsx'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/book/create' element={<CreateBook/>}></Route>
      <Route path='/book/delete/:id' element={<DeleteBook />}></Route>
      <Route path='/book/edit/:id' element={<EditBook />}></Route>
      <Route path='/book/details/:id' element={<ShowBook />}></Route>
    </Routes>
    
  )
}

export default App