/* import { useState } from 'react';

function BookCreate ({onCreate}) {
    const[title,setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('')
    }

    const handleChange = (event) => {
        setTitle(event.target.value)
    }


    return(
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <lable>Title</lable>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate; 

import { useState } from 'react';

function BookCreate ({onCreate}) {
    const[title,setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('')
    }

    const handleChange = (event) => {
        setTitle(event.target.value)
    }


    return(
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate; */

import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate (){

    const [title, setTitle] = useState ('');
    const {createBook} = useBooksContext();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(title);
        setTitle('');
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate; 


