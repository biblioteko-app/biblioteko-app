import React from 'react'
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel'
import './Books.css'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'

const Books = () => {

  const bookTest = {
    title: 'A bala de prata',
    author: 'Rohit',
    progress: 70,
    rating: 2.4,
    edition: '1.0',
    gender: 'Ficção',
    synopsis:
      'Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!',
    pageNumber: 10
  }

  const booksTest = []

  for (let i of [1,2,3,4,5,6,7,8,9,10,11,12]) {
    booksTest.push(bookTest)
  }

  return (
    <>
      <div className="container">
        <div className="books">
          <BooksCarousel title="Livros favoritados" books={booksTest}/>
        </div>

        <div className="books">
          <BooksCarousel title="Leituras em andamento" books={booksTest}/>
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
