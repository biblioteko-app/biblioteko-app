import React from 'react'
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel'


const LandingPage = () => {

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
          <BooksCarousel title="Leituras em andamento" books={booksTest}/>
        </div>
      </div>
    </>
  )
}

export default LandingPage