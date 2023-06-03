import React from 'react'
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel'
import './Books.css'

const Books = () => {
  return (
    <>
      <div className="books">
        <BooksCarousel title="Livros favoritados" />
      </div>

      <div className="books">
        <BooksCarousel title="Leituras em andamento" />
      </div>
    </>
  )
}

export default Books
