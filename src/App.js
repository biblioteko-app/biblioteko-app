import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home/Home'
import About from './pages/About'
import LoginSignUp from './pages/LoginSignUp'
import AddBook from './pages/AddBook'
import AddClass from './pages/AddClass'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import Books from './pages/Books/Books'

function App() {
  // Aqui você pode substituir 'user' pelo objeto que representa o usuário logado
  const [logged, setLogged] = useState(true) 
  const user = {
    role: 'professor'
  }

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={logged ? <Home />: <LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/turmas" element={<AddClass />} />
          <Route path="/loginSignUp" element={<LoginSignUp />} />
          {user && user.role === 'professor' && (
            <Route path="/addBook" element={<AddBook />} />
          )}
          {user && user.role === 'professor' && (
            <Route path="/addClass" element={<AddClass />} />
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
