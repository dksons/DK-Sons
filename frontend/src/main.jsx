import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'
import { BrowserRouter } from 'react-router-dom'
import {BlogProvider } from './context/contextapi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <BlogProvider>   
       <App />
   </BlogProvider>
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
