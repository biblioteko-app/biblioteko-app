import React from 'react'
import GetInTouch from '../../components/GetInTouch';
import GetStarted from '../../components/GetStarted';
import Navbar from '../../components/Navbar';
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel';
import './Books.css'

const Books = () => {
  return (
    <>
      <div className='books'>
        <BooksCarousel title='Livros favoritados' />
      </div>

      <div className='books'>
        <BooksCarousel title='Leituras em andamento'/>
      </div>
    </>
  )
}

export default Books