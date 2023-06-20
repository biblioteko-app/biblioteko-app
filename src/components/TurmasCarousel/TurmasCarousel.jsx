import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './TurmasCarousel.css'

import { Pagination, Navigation } from 'swiper'
import BookCard from '../BookCard/BookCard'
import { getClasses } from '../../services/TurmaService'
// import { getBooks } from '../../services/BookService'
import TurmaCard from '../TurmaCard/TurmaCard'

export default function TurmasCarousel({ user, editable, readingList, starredBooks }) {
  
  const [turmas, setTurmas] = useState([]);

  useEffect(
    () => {
      getClasses(user.user.id, setTurmas);
    }, []
  )

  const carousel = () => {
    return (
      <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
      >
        {turmaSlides()}
      </Swiper>
    )
  }


  const turmaSlides = () => turmas.map(
    turma => {
      return (
        <SwiperSlide>
          <TurmaCard user={user} turma={turma} editable={editable} readingList={readingList} starredBooks={starredBooks} />
        </SwiperSlide>
      )
    }
  )

  return (
    <>
      <div className="title">Minhas Turmas:</div>
      <div className="carousel">
        { !(turmas instanceof Array) || turmas.length === 0 ? 'noBooks()' : carousel() }
      </div>
    </>
  )
}