import React from 'react';
import { useQuery} from '@apollo/client';
import AddBookForm from './AddBookForm.js';
import {getAuthors} from '../queries/queries.js';

function AddBook() {
    const { loading, error, data } = useQuery(getAuthors);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}</p>;
  return (
    <div id="add-book">
        <AddBookForm {...data}/>
    </div>
  );
}

export default AddBook;   