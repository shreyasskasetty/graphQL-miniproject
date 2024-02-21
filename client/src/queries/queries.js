import {gql} from '@apollo/client';

const getAuthors= gql`
    {
        authors{
            name
            id
        }
    }
`
const getBooksQuery = gql`
    {
        books{
            title
            id
        }
    }
`

const addBookMutation = gql`
    mutation($title: String!, $genre: String!, $authorId: ID!){
        addBook(title:$title, genre:$genre, authorId:$authorId){
            title
            id
        }
    }
`

export {getAuthors, getBooksQuery, addBookMutation};