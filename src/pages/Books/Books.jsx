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
  const [toggleUpdate, setToggleUpdate] = useState(false);

  useEffect(
    () => {
      getReadingList(user.user.id, setReadingList);
      getStarredBooks(user.user.id, setStarredBooks);
      getAllMyBooks(user.user.id, setMyBooks);
      console.log(myBooks)
      // console.log(readingList)
      // console.log(starredBooks)
    }, [toggleUpdate]
  )

  return (
    <>
      <div className="container">
        <div className="books">
          <BooksCarousel title="Livros favoritados" books={starredBooks} editable={false} user={user} readingList={readingList} starredBooks={starredBooks} update={() => {setToggleUpdate(!toggleUpdate)}}/>
        </div>

        <div className="books">
          <BooksCarousel title="Leituras em andamento" books={readingList} editable={false} user={user} readingList={readingList} starredBooks={starredBooks} update={() => {setToggleUpdate(!toggleUpdate)}}/>
        </div>

        { user.userDetails.role === "PROFESSOR" &&
          <div className="books">
            <BooksCarousel title="Meus livros" books={myBooks} editable={true} user={user} readingList={readingList} starredBooks={starredBooks} update={() => {setToggleUpdate(!toggleUpdate)}}/>
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
