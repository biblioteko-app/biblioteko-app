import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './BooksCarousel.css';
import { Navigation } from 'swiper';
import BookCard from '../BookCard/BookCard';
import { getBooks } from '../../services/BookService';

export default function BooksCarousel(options) {

  
  const slidesPerView = Math.round(window.innerWidth / 175 )

  const [ setBooks] = useState([]);

  useEffect(() => { 
    async function b() { 
      const books = await getBooks();
      setBooks(books);
    }
  })


  return (
    <>
      <div className='title'>{ options['title'] }</div>
      <div className='carousel-container'></div>
      <div className='carousel'>
        <Swiper
            slidesPerView={ slidesPerView }
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
        >
          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>
          
          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>

          <SwiperSlide>
            <BookCard book=
              {{ 
                title: "A bala de prata", 
                author: "Rohit", 
                progress: 70, 
                rating: 2.4,
                edition: "1.0",
                gender: "Ficção",
                synopsis: "Muitas pessoas perguntam se existe bala de prata, e eu estou aqui para dizer-te que não há bala de prata!",
                pageNumber: 10
              }}/>
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  )
}
