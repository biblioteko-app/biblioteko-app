import React from 'react'
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel'
import { useState } from 'react'
import { useEffect } from 'react'
import { getBooks, getReadingList, getStarredBooks } from '../../services/BookService'


const Home = ({ user }) => {

  const [readingList, setReadingList] = useState([])
  const [starredBooks, setStarredBooks] = useState([])
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [catalog, setCatalog] = useState([])
  // const [starredBooks, setStarredBooks] = useState([])

  useEffect(
    () => {
      getReadingList(user.user.id, setReadingList);
      getBooks(user.user.id, setCatalog)
      getStarredBooks(user.user.id, setStarredBooks);
      catalog.sort((a, b) => {
        if (a.rating > b.rating) { return -1 }
        if (a.rating < b.rating) { return 1 }
        return 0
      })
      // setStarredBooks(getStarredBooks());
      console.log(readingList)
      console.log(catalog)
    }, [toggleUpdate]
  )


  return (
    <>
      <div className="container">
        <div className="books">
          <BooksCarousel 
              title="Leituras em andamento" 
              books={readingList} 
              user={user} 
              editable={false} 
              readingList={readingList} 
              starredBooks={starredBooks} 
              update={() => {setToggleUpdate(!toggleUpdate)}}/>
        </div>


        <div className="books">
          <BooksCarousel 
              title="Catálogo" 
              books={catalog} 
              user={user} 
              editable={false}
              readingList={readingList} 
              starredBooks={starredBooks} 
              update={() => {setToggleUpdate(!toggleUpdate)}}/>
        </div>
      </div>
    </>
  )
}

export default Home