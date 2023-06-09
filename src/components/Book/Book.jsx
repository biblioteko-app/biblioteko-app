import React, { useEffect, useState } from 'react'
import './Book.css'
import { Rating } from '@mui/material'
import authentication from '../../services/authentication'
import { unstarBook, addBookToReadingList, starBook, editBook, getReadingList, getStarredBooks, isStarred } from '../../services/BookService'
import { useNavigate } from 'react-router-dom'

export default function Books({ book, editable, user, isStarred, isInReadList, close }) {
  const navigate = useNavigate();

  const [starred, setStarred] = useState(isStarred)
  const [reading, setReading] = useState(isInReadList)

  const handleStarred = () => {
    let r = false;
    if (starred === false) {
      console.log("Entrou na request");
      r = starBook(user.user.id, book.id)
      
    } else {
      r = unstarBook(user.user.id, book.id)
    }
    setStarred(!starred)
  }

  const [title, setTitle] = useState(book.title);
  const [gender, setGender] = useState(book.gender);
  const [pageNumber, setPageNumber] = useState(book.pageNumber ? book.pageNumber : 0);
  const [author, setAuthor] = useState(book.author);
  const [edition, setEdition] = useState(book.edition);
  const [synopsis, setSynopsis] = useState(book.synopsis);
  const [photo, setPhoto] = useState(book.photo);
  const [accessLink, setAccessLink] = useState(book.accessLink);

  const [editMode, setEditMode] = useState(false);
  const [rating, setRating] = useState(book.rating);


  const handleRating = (e) => {
    setRating(e.target.value);
  }

  const handleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      let b = {
        title: title,
        author: author,
        genre: gender,
        edition: edition,
        synopsis: synopsis,
        photo: photo,
        pages: pageNumber,
        accessLink: accessLink,
      }

      let result = editBook(user.user.id, b, book.id);
      console.log(b)
      close()
    }
  }


  return (
    <>
      <div className="background">
        <div className="wrapper">
          <div className="info">
            <div className="label">Título:</div>
            {/* <div className="value">{title}</div> */}
            <input className="value" title={title} type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} disabled={!editMode}/>
          </div>

          <div className="info">
            <div className="label">Gênero:</div>
            {/* <div className="value">{book.gender}</div> */}
            <input className="value" title={gender} type="text" value={gender} onChange={(e) => { setGender(e.target.value) }} disabled={!editMode}/>
          </div>

          <div className="info">
            <div className="label">Número de páginas:</div>
            {/* <div className="value">{book.pageNumber}</div> */}
            <input className="value" title={pageNumber} type="number" value={pageNumber} onChange={(e) => { setPageNumber(Number(e.target.value)) }} disabled={!editMode}/>
          </div>

          <div className="starred">
            {/* <button onClick={handleStarred} className='starred-button'> */}
            <svg
              className="heart"
              fill={starred ? '#483E80' : '#F7F7F7'}
              onClick={handleStarred}
            >
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </svg>
            {/* </button> */}
          </div>

          <div className="info">
            <div className="label">Autor:</div>
            {/* <div className="value">{book.author}</div> */}
            <input className="value" title={author} type="text" value={author} onChange={(e) => { setAuthor(e.target.value) }} disabled={!editMode}/>
          </div>

          <div className="info">
            <div className="label">Edição:</div>
            {/* <div className="value">{book.edition}</div> */}
            <input className="value" title={edition} type="number" value={edition} onChange={(e) => { setEdition(Number(e.target.value)) }} disabled={!editMode}/>
          </div>

          <div className="synopsis">
            <div className="synopsis-content">{book.synopsis}</div>
          </div>

          <div className="photo-actions">
            <div className="photo-rating">
              <div className="photo">
                <img src={photo} alt="Foto" />
              </div>

              <Rating
                name="rating"
                value={rating}
                precision={0.1}
                size="large"
                className="rating-editable"
                onChange={handleRating}
              />

              <div className="buttons">
                <button className="list-add" onClick={() => { addBookToReadingList(user.user.id, book.id); close() }} disabled={ reading } style={ reading ? {backgroundColor: 'grey'} : {}}>
                  { reading ? 'Adicionado na lista' : 'Adicionar à lista' }
                </button>
              </div>
            </div>

            { editable &&
              <div className="actions"> 
                <button className="action-buttons">&#x1F5D1;</button>
                <button className="action-buttons" onClick={handleEditMode}>{ editMode ? <>&#9745;</> : <>&#x1F589;</> }</button>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}