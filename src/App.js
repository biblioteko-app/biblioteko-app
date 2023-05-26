import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import LoginSignUp from './pages/LoginSignUp';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Books from './pages/Books/Books';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/about' element={<About />} />
          <Route path='/LoginSignUp' element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;