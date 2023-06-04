import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './SuggestBook.css';
import BookCard from '../BookCard/BookCard';

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
    const [bookCards, setBookCards] = useState([])

    useEffect(() => {
        async function b() {
            const books = await getBooks()
            setBooks(books)
            const bookcardstemp = []
            for (let book of books) {
                bookcardstemp.push(
                    <div className='bookcard-container'>
                        <BookCard book={book}/>
                        <button className='select-button'>Adicionar</button>
                    </div>
                )
            }
            // setBookCards(books.map(book => {
            //     <li>
            //         <div className='bookcard-container'>
            //             <BookCard book={book}/>
            //             <button className='select-button'>Adicionar</button>
            //         </div>
            //     </li>
            // }));
            console.log(books)
            
            console.log(bookcardstemp)   
        }
        b();
    }, [])
    
    // console.log(bookCards)

    return (
        <div className='main-suggest-container'>
            <div className='suggest-container'>
                <input type="text" className='search-input'/>
                <div className='search-result'>
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={"auto"}
                        freeMode={true}
                        scrollbar={true}
                        mousewheel={true}
                        modules={[FreeMode, Scrollbar, Mousewheel]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ul>
                                {bookCards}
                            </ul>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )

}