import React, { useEffect, useState } from 'react'
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
import authentication from './services/authentication'
import Turmas from './pages/Turmas/Turmas'

function App() {
  // Aqui você pode substituir 'user' pelo objeto que representa o usuário logado

  let user = {}

  const [loggedUser, setLoggedUser] = useState({ void: true });
  console.log(loggedUser)
  

  // authentication.logOut();

  return (
    <>
      <BrowserRouter>
        <Navbar user={loggedUser} /> 
        <Routes>
          <Route path="/" element={ loggedUser.void === undefined ? <Home user={loggedUser}/>: <LandingPage />} />
          <Route path="/about" element={<About user={loggedUser}/>} />
          <Route path="/books" element={<Books user={loggedUser}/>} />
          <Route path="/turmas" element={<Turmas user={loggedUser}/>} />
          <Route path="/profile" element={<LoginSignUp setLoggedUser={setLoggedUser} user={loggedUser}/>} />
          <Route path="/addBook" element={<AddBook user={loggedUser}/>} />
          <Route path="/addClass" element={<AddClass user={loggedUser}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
