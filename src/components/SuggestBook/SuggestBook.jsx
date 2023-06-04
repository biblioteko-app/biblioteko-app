import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './SuggestBook.css';
import BookCard from '../BookCard/BookCard';
import BooksCarousel from '../BooksCarousel/BooksCarousel';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { getBooks } from '../../services/BookService'


export default function SuggestBook(props) {

    const schoolClassId = props.schoolClassId;

    const [books, setBooks] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        async function b() {
            const books = await getBooks()
            setBooks(books);
        }
        b();
    }, [inputValue])
    
    // console.log(bookCards)

    return (
        <div className='main-suggest-container'>
            <div className='suggest-container'>
                <input type="text" className='search-input' onChange={handleInput} value={inputValue}/>
                <div className='search-result'>
                <BooksCarousel title="Resultado:" books={books} addToSchoolClass={true} schoolClass={12345}/>
                    {/* <Swiper
                        direction={"vertical"}
                        slidesPerView={"auto"}
                        freeMode={true}
                        scrollbar={true}
                        mousewheel={true}
                        modules={[FreeMode, Scrollbar, Mousewheel]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {books.map(book => {
                                return (
                                    <div className='bookcard-container'>
                                        <BookCard book={book} noDetails={true}/>
                                        <button className='select-button'>Adicionar</button>
                                    </div>
                                )
                            })}
                        </SwiperSlide>
                    </Swiper> */}
                </div>
            </div>
        </div>
    )

}