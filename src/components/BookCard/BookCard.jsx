import React from 'react';
import './BookCard.css';
import { Rating } from '@mui/material';

export default function BookCard(props) {

  const book = props['book'];

  return (
    <>        
      <div className='card'>
        <div className='info'>
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
          <button className='details'>
            Detalhes
          </button>

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
