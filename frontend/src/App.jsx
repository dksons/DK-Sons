import React from 'react'
import Nav from './components/common/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


const App = () => {
  return (
    <div className=" min-h-screen  flex flex-col ">
      <div className='fixed z-50'>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </div>
  )
}

export default App
