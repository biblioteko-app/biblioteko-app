import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LoginSignUp from './pages/LoginSignUp';
import AddBook from './pages/AddBook';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Books from './components/Book/Book'; // Importe o módulo 'Books' corretamente

function App() {
  // Aqui você pode substituir 'user' pelo objeto que representa o usuário logado
  const user = {
    role: 'professor',
  };

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/books' element={<Books />} />
          <Route path="/loginSignUp" element={<LoginSignUp />} />
          {user && user.role === 'professor' && (
            <Route path="/addBook" element={<AddBook />} />
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
