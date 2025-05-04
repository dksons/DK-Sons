import React from 'react'
import Nav from './components/common/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'


const App = () => {
  return (
    <div className=" min-h-screen  flex flex-col ">
      <div className='fixed z-50'>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>

    </div>
  )
}

export default App
