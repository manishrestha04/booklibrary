/* import {useState} from 'react';

function BookEdit ({book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit(book.id, title);
    }


    return <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">Save</button>
    </form>;
}

export default BookEdit; */

import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit ({book, onSubmit}) {

    const [title, setTitle ] = useState(book.title);
    const { editBookbyID } = useBooksContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        editBookbyID(book.id, title);
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
            <form className="book-edit" onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button is-primary">Save</button>
            </form>
    )
}

export default BookEdit; 