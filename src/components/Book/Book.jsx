import React from 'react'
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import BooksCarousel from '../BooksCarousel/BooksCarousel'

const Books = () => {
  return (
    <>
      <div className="books">
        <BooksCarousel title="Livros favoritados" />
      </div>

      <div className="books">
        <BooksCarousel title="Leituras em andamento" />
      </div>

      <div className="add-button">
        <Link to="/addBook">
          <MdAdd className="add-icon" />
        </Link>
      </div>
    </>
  )
}

export default Books
