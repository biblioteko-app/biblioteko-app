import React, { useEffect, useRef, useState } from 'react'
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
  const [slidesPerView, setSlidesPerView] = useState(0)
  const carouselRef = useRef()

  useEffect(() => {
    setSlidesPerView(Math.round((window.innerWidth * 0.8) / 175))
  }, [])

  const rows = Number(options['rows'])
  const books = options.books
  const addToSchoolClass = options.addToSchoolClass
  const schoolClass = options.schoolClass

  // useEffect(() => {
  //   async function b() {
  //     const books = await getBooks()
  //     setBooks(books)
  //   }
  // })

  return (
    <>
      <div className="title">{options['title']}</div>
      <div className="carousel">
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard
                book={{
                  title: book.title,
                  author: book.author,
                  progress: book.progress,
                  rating: book.rating,
                  edition: book.edition,
                  gender: book.gender,
                  synopsis: book.synopsis,
                  pageNumber: book.pageNumber
                }}
                addToSchoolClass={addToSchoolClass}
                schoolClass={schoolClass}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
