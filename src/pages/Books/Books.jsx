import React, { useEffect, useState } from 'react'
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel'
import './Books.css'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import { getAllMyBooks, getReadingList, getStarredBooks } from '../../services/BookService'

const Books = ({ user }) => {

  const [readingList, setReadingList] = useState([])
  const [starredBooks, setStarredBooks] = useState([])
  const [myBooks, setMyBooks] = useState([])

  useEffect(
    () => {
      setReadingList(getReadingList(user.user.id));
      setStarredBooks(getStarredBooks(user.user.id));
      setMyBooks(getAllMyBooks(user.user.id));
      // console.log(readingList)
      // console.log(starredBooks)
    }, []
  )

  return (
    <>
      <div className="container">
        <div className="books">
          <BooksCarousel title="Livros favoritados" books={readingList} editable={false} user={user}/>
        </div>

        <div className="books">
          <BooksCarousel title="Leituras em andamento" books={starredBooks} editable={false} user={user}/>
        </div>

        { user.userDetails.role === "PROFESSOR" &&
          <div className="books">
            <BooksCarousel title="Meus livros" books={myBooks} editable={true} user={user}/>
          </div>
        }

        { user.userDetails.role === "PROFESSOR" &&
          <div className="add-button">
            <Link to="/addBook">
              <MdAdd className="add-icon" />
            </Link>
          </div>
        }
      </div>
    </>
  )
}

export default Books
