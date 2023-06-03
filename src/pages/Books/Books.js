import React from 'react'
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel'
import './Books.css'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'

const Books = () => {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  )
}

export default Books
