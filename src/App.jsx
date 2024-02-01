import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyForm from './MyForm'
import Contact from './Pages/Contact'
import Layout from './Pages/Layout'
import Blogs from './Pages/Blogs'
import NoPage from './Pages/NoPage'

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App