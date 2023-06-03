import React, { useState } from 'react'
import './Book.css'
import { Rating } from '@mui/material'

export default function Books(props) {
  let book = props.book

  const [starred, setStarred] = useState(false)

  const handleStarred = () => {
    setStarred(!starred)
  }

  return (
    <>
      <div className="background">
        <div className="wrapper">
          <div className="info">
            <div className="label">Título:</div>
            <div className="value">{book.title}</div>
          </div>

          <div className="info">
            <div className="label">Gênero:</div>
            <div className="value">{book.gender}</div>
          </div>

          <div className="info">
            <div className="label">Número de páginas:</div>
            <div className="value">{book.pageNumber}</div>
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
            <div className="value">{book.author}</div>
          </div>

          <div className="info">
            <div className="label">EdiÃ§Ã£o:</div>
            <div className="value">{book.edition}</div>
          </div>

          <div className="synopsis">
            <div className="synopsis-content">{book.synopsis}</div>
          </div>

          <div className="photo-actions">
            <div className="photo-rating">
              <div className="photo">Photo</div>

              <Rating
                name="rating"
                value={book.rating}
                precision={0.1}
                size="large"
                readOnly
                className="rating-editable"
              />

              <div className="buttons">
                <button className="list-add">Adicionar à lista</button>
              </div>
            </div>

            <div className="actions">
              <button className="action-buttons">&#x1F5D1;</button>
              <button className="action-buttons">&#x1F589;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}