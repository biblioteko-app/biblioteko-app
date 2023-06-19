import React from "react";
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import TurmasCarousel from "../../components/TurmasCarousel/TurmasCarousel";
import './Turmas.css'
import { getReadingList, getStarredBooks } from "../../services/BookService";
import { useState, useEffect } from "react";

export default function Turmas({ user }) {

  const [readingList, setReadingList] = useState([])
  const [starredBooks, setStarredBooks] = useState([])
  const [myBooks, setMyBooks] = useState([])
  const [toggleUpdate, setToggleUpdate] = useState(false);

  useEffect(
    () => {
      getReadingList(user.user.id, setReadingList);
      getStarredBooks(user.user.id, setStarredBooks);
      console.log(myBooks)
      // console.log(readingList)
      // console.log(starredBooks)
    }, [toggleUpdate]
  )

  return (
    <>
      <div className="container">
        <div className="turmas">
          <TurmasCarousel user={ user } editable={false} readingList={readingList} starredBooks={starredBooks}/>
        </div>

        { user.userDetails.role === "PROFESSOR" &&
          <div className="add-button">
            <Link to="/addClass">
              <MdAdd className="add-icon" />
            </Link>
          </div>
        }
      </div>
    </>
  )
}