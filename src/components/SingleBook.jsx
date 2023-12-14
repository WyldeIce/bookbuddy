import {Link, useParams} from 'react-router-dom'

const SingleBook = ({books, addBook}) => {
    const params = useParams()
    const id = params.id*1

    const selectBook = books.find((book) => {
        return book.id === id
    })

    if(!selectBook) {
        return null
    } else {
        return (
            <div>
                <h2>{selectBook.title}</h2>
                <h4>{selectBook.author}</h4>
                <img src={selectBook.coverimage} />
                <br />
                <Link to='/books'>Back to all books!</Link>
                <button onClick={() => {addBook(selectBook)}}>Add book to check out</button>
            </div>
        )
    }
}

export default SingleBook