import React, { useEffect } from "react";
import './Turma.css'
import { useState } from "react";
import { getClassBooks, getStudentsOfClass } from "../../services/TurmaService";
import BooksCarousel from "../BooksCarousel/BooksCarousel";

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper'
import { MdAdd } from 'react-icons/md'
import Modal from '@mui/material/Modal';
import SuggestBook from '../SuggestBook/SuggestBook';


export default function Turma({ user, turma, editable, readingList, starredBooks }) {

  const [editMode, setEditMode] = useState(false);
  const [classBooks, setClassBooks] = useState([]);
  const [students, setStudents] = useState([]);
  const [toggleUpdate, setToggleUpdate] = useState(false)

  const handleEditMode = () => {
    // setEditMode(!editMode);
    // if (editMode) {
    //   let b = {
    //     title: title,
    //     author: author,
    //     genre: gender,
    //     edition: edition,
    //     synopsis: synopsis,
    //     photo: book.photo,
    //     pages: pageNumber,
    //     accessLink: accessLink,
    //   }

    //   let result = editBook(user.user.id, b, book.id);
    //   console.log(b)
    //   navigate("/turmas")
    // }
  }

  useEffect(() => {
    getClassBooks(turma.id, setClassBooks)
    getStudentsOfClass(turma.id, setStudents)
  }, [ toggleUpdate ])


  const [isOpen, setIsOpen] = useState(false);

  const closing = () => {setIsOpen(false); setToggleUpdate(!toggleUpdate) }
  const opening = () => {setIsOpen(true)}

  console.log(user)

  const modal = () => {
    return <>
      <Modal
          open={ isOpen }
          onClose={closing}
          >
        <div className='book-wrapper'>
          {/* <Book book={book} editable={editable} user={user} isInReadList={props.isInReadList} isStarred={props.isStarred} /> */}
          <SuggestBook schoolClassId={turma.id} user={user} close={closing} classBooks={classBooks}/>
          {/* <Turma user={user} turma={turma} editable={editable} readingList={readingList} starredBooks={starredBooks}/> */}
          <button className='close-button' onClick={closing}>&#x2715;</button>
        </div>
      </Modal>
    </>
  }
  


  return (
    <div className="turma-container">

      <div className="turma-information">
        <div className="turma-name-info">
          <div className="turma-label-info">
            Turma:
          </div>
          <div className="turma-info-value"> {turma.name} </div>
        </div>

        <div className="turma-subject-info">
          <div className="turma-label-info">
            Disciplina:
          </div>
          <div className="turma-info-value"> {turma.schoolSubject} </div>
        </div>

        <div className="turma-year-info">
          <div className="turma-label-info">
            Ano:
          </div>
          <div className="turma-info-value"> {turma.classYear} </div>
        </div>

        <div className="turma-professor-info">
          <div className="turma-professor-photo"> Sem foto </div>
          <div>
            <div className="turma-label-info">
              Professor:
            </div>
            <div className="turma-info-value"> {turma.owner.name} </div>
          </div>
        </div>

        <div className="turma-photo-info"> Sem foto </div>

        {/* <div className=""> */}
          { editable &&
            <div className="turma-edit-button"> 
              <button className="action-buttons">&#x1F5D1;</button>
              <button className="action-buttons" onClick={handleEditMode}>{ editMode ? <>&#9745;</> : <>&#x1F589;</> }</button>
            </div>
          }
        {/* </div> */}
      </div>

      <div className='turma-books'>
        <BooksCarousel 
            title="Livros sugeridos"
            className="books-carousel"
            books={classBooks}
            editable={false}
            user={user} 
            readingList={readingList} 
            starredBooks={starredBooks} 
            update={() => {setToggleUpdate(!toggleUpdate)}}/>
      </div>

      <div className="turma-students">
          <Swiper
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper">
            {
              students.map((s) => {
                return (
                  <SwiperSlide>
                    <div className="turma-student">
                      <div className="turma-student-photo"></div>
                      <div className="turma-student-name"> { s.name } </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
      </div>

      { user.userDetails.role === "PROFESSOR" &&
          <div className="add-button" onClick={opening}>
            
            <MdAdd className="add-icon" />
            
          </div>
      }

      { isOpen && modal()}

    </div>
  )

}