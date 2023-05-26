import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/books/:id' element={<Edit/>}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
