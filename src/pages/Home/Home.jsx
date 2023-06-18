import React from 'react'
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel'
import { useState } from 'react'
import { useEffect } from 'react'
import { getReadingList } from '../../services/BookService'


const Home = ({ user }) => {

  const [readingList, setReadingList] = useState([])
  // const [starredBooks, setStarredBooks] = useState([])

  useEffect(
    () => {
      setReadingList(getReadingList(user.user.id));
      // setStarredBooks(getStarredBooks());
      console.log(readingList)
      // console.log(starredBooks)
    }, []
  )

  const bookTest = {
    id: 123456789,
    title: 'A bala de prata',
    author: 'Rohit',
    progress: 70,
    rating: 2.4,
    edition: '1.0',
    genre: 'Ficção',
    photo: '',
    edition: 1,
    synopsis:
      'Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!',
    pageNumber: 10,
    accessLink: ''
  }

  const booksTest = []

  for (let i of [1,2,3,4,5,6,7,8,9,10,11,12]) {
    booksTest.push(bookTest)
  }

  return (
    <>
      <div className="container">
        <div className="books">
          <BooksCarousel title="Leituras em andamento" books={readingList}/>
        </div>


        <div className="books">
          <BooksCarousel title="Catálogo" books={booksTest}/>
        </div>
      </div>
    </>
  )
}

export default Home