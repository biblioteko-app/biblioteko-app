import React, { useState } from 'react';
import './BookCard.css';
import { Rating } from '@mui/material';
import Book from '../Book/Book';
import Modal from '@mui/material/Modal';
import SuggestBook from '../SuggestBook/SuggestBook';



export default function BookCard(props) {
  const { book } = props;
  const user = props.user;
  const editable = props.editable;


  const [isOpen, setIsOpen] = useState(false);

  const closing = () => {setIsOpen(false); props.update(); }
  const opening = () => {setIsOpen(true)}
  
  let addToSchoolClass = props.addToSchoolClass;
  let schoolClass = props.schoolClass;

  const modal = () => {
    return <>
      <Modal
          open={ isOpen }
          onClose={closing}
          >
        <div className='book-wrapper'>
          <Book book={book} editable={editable} user={user} isInReadList={props.isInReadList} isStarred={props.isStarred} close={closing}/>
          {/* <SuggestBook /> */}
          <button className='close-button' onClick={closing}>&#x2715;</button>
        </div>
      </Modal>
    </>
  }

  const addToSchoolClassFunc = () => {
    console.log(schoolClass)
    // do something
  }


  return (
    <>
      <div className='card'>
        <div className='book-info'>
          <div className='card-title'>{book.title}</div>
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
              onClick={addToSchoolClass ? addToSchoolClassFunc : opening }>
            {addToSchoolClass ? "Adicionar" : "Detalhes"}
          </button>

          { isOpen && modal() }

          <div className='progress'>
            <div 
                className='progressBar' 
                style={{ 
                  width: `${book.progress}%`, 
                  height: '5px', 
                  backgroundColor: '#6CE44E',
                  margin: 0,
                  padding: 0
                }}
                title={`${book.progress}%`}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}