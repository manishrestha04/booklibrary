/*import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App (title) {
    const [books, setBooks] = useState([])

    const editBookbyID = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title:newTitle};
            }

            return book;
        })

        setBooks(updatedBooks);

    }

    const deleteBookbyID = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !==id;
        });

        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updatedBooks = [
            ...books, 
            {
                id: Math.round(Math.random() *9999), 
                title:title}]
            setBooks(updatedBooks)
        
    }
    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookbyID} books={books} onDelete={deleteBookbyID}/>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App; 

import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from "axios";


function App () {

    const [books,setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        
        setBooks(response.data);
    };

    useEffect (() => {
        fetchBooks();
    }, []);


    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
        title,})
        const updatedBooks = [
            ...books, response.data]
            setBooks(updatedBooks)
          
    }


     const editBookbyID = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        })

        const updatedBooks = books.map((book)=> {
            if(book.id === id) {
                return {...book, ...response.data}
            }
            return book;  
        })
        setBooks(updatedBooks)
     }
     
     const deleteBookbyID = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !==id;
        });

        setBooks(updatedBooks);
    };


    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookbyID} books={books} onDelete={deleteBookbyID}/>
            <BookCreate onCreate={createBook} />
        </div>
    )

}

export default App; 

import { useState, useEffect } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App () {
    
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data)
    }

    useEffect (()=> {
        fetchBooks();
    }, [])

    const createBook = async (title) =>{
        const response = await axios.post('http://localhost:3001/books', {
        title, })
        const updatedBooks = [
            ...books, response.data]
            setBooks(updatedBooks)
    }

    const editBookbyID = async (id,newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle, })

            const updatedBooks = books.map((book)=> {
                if(book.id === id) {
                    return{...book, ...response.data }
                }
                return book;
            })
            setBooks(updatedBooks)
    }

    const deleteBookbyID = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book)=>{
            return book.id !==id ;
        })

        setBooks(updatedBooks)

    }

    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate onCreate={createBook} />
            <BookList onEdit={editBookbyID} onDelete={deleteBookbyID} books={books} />
        </div>
    )
}

export default App; */

import {  useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App () {

    const {fetchBooks} = useBooksContext();

    useEffect (()=> {
        fetchBooks();
    }, [fetchBooks]);

    
    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate  />
            <BookList />
        </div>
    )
}

export default App; 
    
