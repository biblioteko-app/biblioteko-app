import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './SuggestBook.css';
import BookCard from '../BookCard/BookCard';
import BooksCarousel from '../BooksCarousel/BooksCarousel';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper'

import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { getAllBooks, getBooks } from '../../services/BookService'
import { addBooksToClass } from '../../services/TurmaService';


export default function SuggestBook({ schoolClassId, user, close, classBooks }) {

    const [books, setBooks] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        getAllBooks(user.user.id, setBooks)
    }, [inputValue])

    const handleSuggest = (bookId) => {
        addBooksToClass(schoolClassId, bookId);
        close()
    }
    
    // console.log(bookCards)

    return (
        <div className='main-suggest-container'>
            <div className='suggest-container'>
                <input type="text" className='search-input' onChange={handleInput} value={inputValue}/>
                <div className='search-result'>
                {/* <BooksCarousel title="Resultado:" books={books.filter((b) => b.title.includes(inputValue))} addToSchoolClass={true} schoolClass={12345}/> */}
                    <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={15}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper">
                        
                            {books.filter(b => b.title.includes(inputValue) && !(classBooks.map(bo => bo.id).includes(b.id))).map(book => {
                                return (
                                    <SwiperSlide>
                                    <div className='bookcard-container'>
                                        <div className='book-name'>{book.title}</div>
                                        <div className='book-author'>{book.author}</div>
                                        <button className='select-button' onClick={() => {handleSuggest(book.id)}}>Adicionar</button>
                                    </div>
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper>
                </div>
            </div>
        </div>
    )

}