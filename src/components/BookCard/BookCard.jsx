import React, { useState } from 'react';
import './BookCard.css';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import Modal from '@mui/material/Modal';

export default function BookCard(props) {

  const book = props['book'];
  const [isOpen, setIsOpen] = useState(false);
  const closing = () => setIsOpen(false);
  const opening = () => setIsOpen(true);

  const modal = () => {
    return <>
      <Modal
          open={ isOpen }
          onClose={closing}
          >
        <div className='book-wrapper'>
          <Book book={book}/>
          <button className='close-button' onClick={closing}>&#x2715;</button>
        </div>
      </Modal>
    </>
  }

  return (
    <>        
      <div className='card'>
        <div className='book-info'>
          <div className='title'>{book.title}</div>
          <div className='author'>{book.author}</div>
          
          <Rating 
              name='rating'
              value={book.rating}
              precision={0.1}
              size='small'
              readOnly
              className='rating'
    
          />
          
        </div>
        
        <div className='button'>
          <button 
              className='details'
              onClick={opening}>
            Detalhes
          </button>

          { isOpen && modal() }

          <div className='progress'>
            <div 
                className='progressBar' 
                style={{ 
                  width: (`${book.progress}%`), 
                  height: '5px', 
                  backgroundColor: '#6CE44E',
                  margin: 0,
                  padding: 0
                }}
                title={`${book.progress}%`}
            >
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}
