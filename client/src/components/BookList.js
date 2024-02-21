import React from 'react';
import { useQuery} from '@apollo/client';
import {getBooksQuery} from '../queries/queries.js';

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}</p>;
  return (
    <div id="book-list">
        <ul id="book-list">
            {data.books.map(book => (
                <li key={book.id}>{book.title}</li>
            ))}
        </ul>
    </div>
  );
}

export default BookList;
