/*import BookShow from "./BookShow";

function BookList ({ books, onDelete, onEdit }) {
    const renderedBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    })

    return (
         <div className="book-list">{renderedBooks}</div> 
)}

export default BookList; */

import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";


function BookList () {
    const { books } = useBooksContext();

    const renderedBooks = books.map((book)=> {
        return <BookShow key={book.id} book={book} />
    })

    return(
        <div className="book-list">
            {renderedBooks}
            </div>
    )
}

export default BookList; 