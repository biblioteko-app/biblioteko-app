import { React, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BooksCarousel.css'

import { Pagination, Navigation } from 'swiper';
import BookCard from '../BookCard/BookCard';
import { getBooks } from '../../services/BookService';

export default function BooksCarousel(options) {

  
  const slidesPerView = Math.round(window.innerWidth / 175 )
  const rows = Number(options['rows'])

  const [books, setBooks] = useState([]);

  useEffect(() => { 
    async function b() {
      const books = await getBooks();
      setBooks(books);
    }
  })

  return (
    <>
      <div className='title'>{ options['title'] }</div>
      <div className='carousel'>
        <Swiper
            slidesPerView={ slidesPerView }
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
        >
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 2.4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 100, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>
          <SwiperSlide><BookCard book={{ title: "A bala de prata", author: "Rohit", progress: 70, rating: 4 }}/></SwiperSlide>

        </Swiper>
      </div>
    </>
  )
}