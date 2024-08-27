import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './data';
import {Book} from './components/Book'

const BookList=()=>{
    const getbook=(id)=>{
        const book=books.find(book => book.id ==id);
        console.log(book);
    }
    return (
        <section className='booklist'>
          {books.map((book, index) => {
            return <Book {...book} key={book.id} number={index} getbook={getbook} />;
          })}
        </section>
      );
}

//export default BookList;

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
