import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { addBookMutation, getBooksQuery } from '../queries/queries';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function AddBookForm({ authors }) {
  const theme = useTheme();
  const [bookName, setBookName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorName, setAuthorName] = useState([]);
  const [authorId, setAuthorId] = useState([]);
  const [addBook, { data , loading, error}] = useMutation(addBookMutation);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process and log form data here
    const formData = {
      bookName,
      genre,
      authorName,
      authorId
    };

    addBook({
        variables: {
            title: bookName,
            genre: genre,
            authorId: authorId
        },
        refetchQueries: [{ query: getBooksQuery}]        
    })

    console.log(formData);
    // Further processing can go here
  };

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleAuthorChange = (event) => {
    const {
      target: { value },
    } = event;
    setAuthorName(
      value
    );

    setAuthorId(
      authors.find((author) => author.name === value).id
    );

  };

  function getStyles(name, authorName, theme) {
    return {
      fontWeight:
        authorName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add Book
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          label="Book Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={bookName}
          onChange={handleBookNameChange}
        />
        <TextField
          label="Genre"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={genre}
          onChange={handleGenreChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="select-author-label">Author</InputLabel>
          <Select
            labelId="select-author-label"
            id="select-author"
            value={authorName}
            onChange={handleAuthorChange}
            input={<OutlinedInput label="Author" />}
            MenuProps={MenuProps}
          >
            {authors.map((author) => (
              <MenuItem
                key={author.id}
                value={author.name}
                style={getStyles(author.name, authorName, theme)}
              >
                {author.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
}