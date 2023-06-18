import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './BooksCarousel.css'

import { Pagination, Navigation } from 'swiper'
import BookCard from '../BookCard/BookCard'
import { getBooks } from '../../services/BookService'

export default function BooksCarousel(options) {
  const books = options.books;
  console.log(books instanceof Array);
  const addToSchoolClass = options.addToSchoolClass;
  const schoolClass = options.schoolClass;

  let isReadingList = false

  const noBooks = () => {
    return (
      <div className='void'>
        Lista vazia
      </div>
    )
  }

  const carousel = () => {
    return (
      <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
      >
        {booksSlides()}
      </Swiper>
    )
  }


  const booksSlides = () => books.map(
    readBook => {
      if (Object.keys(readBook).length === 4) { isReadingList = true }
      const book = isReadingList ? readBook.book : readBook;
      console.log(book)
      return (
        <SwiperSlide>
          <BookCard
            book={{
              id: book.id,
              title: book.title,
              author: book.author,
              progress: book.progress,
              rating: book.rating,
              edition: book.edition,
              gender: book.genre,
              synopsis: book.synopsis,
              pageNumber: book.pages,
              accessLink: book.accessLink,
              photo: book.photo,
              readPages: readBook.readPages
            }}
            addToSchoolClass={addToSchoolClass}
            schoolClass={schoolClass}
          />
        </SwiperSlide>   
      )
    }
  )

  return (
    <>
      <div className="title">{options['title']}</div>
      <div className="carousel">
        { !(books instanceof Array) || books.length === 0 ? noBooks() : carousel() }
      </div>
    </>
  )
}