import React from 'react'
import Nav from './components/common/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="w-screen min-h-screen  flex flex-col font-inter">
      
      <Nav></Nav>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>

      </Routes>

    </div>
  )
}

export default App
