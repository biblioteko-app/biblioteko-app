import React, { useState } from 'react';
import './TurmaCard.css';
import { Rating } from '@mui/material';
import Book from '../Book/Book';
import Modal from '@mui/material/Modal';
import SuggestBook from '../SuggestBook/SuggestBook';
import Turma from '../Turma/Turma';



export default function TurmaCard({ user, turma, editable, readingList, starredBooks }) {

  const [isOpen, setIsOpen] = useState(false);

  const closing = () => {setIsOpen(false); }
  const opening = () => {setIsOpen(true)}

  const modal = () => {
    return <>
      <Modal
          open={ isOpen }
          onClose={closing}
          >
        <div className='book-wrapper'>
          {/* <Book book={book} editable={editable} user={user} isInReadList={props.isInReadList} isStarred={props.isStarred} /> */}
          {/* <SuggestBook /> */}
          <Turma user={user} turma={turma} editable={editable} readingList={readingList} starredBooks={starredBooks}/>
          <button className='close-button' onClick={closing}>&#x2715;</button>
        </div>
      </Modal>
    </>
  }
  
  return (
    <>
      <div className='turma-card'>
        <div className='turma-photo'>Sem imagem</div>
        <div className='turma-info'>
          <div className='card-title'>{turma.name}</div>
          <div className='turma-subject'>{turma.schoolSubject}</div>
          <div className='turma-year'>{turma.classYear}</div>
        </div>
        
        <div className='button'>
          <button 
              className='details'
              onClick={ opening }>
            Detalhes
          </button>

          { isOpen && modal() }
        </div>
      </div>
    </>
  )
}