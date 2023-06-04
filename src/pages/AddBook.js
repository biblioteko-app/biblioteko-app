import React from 'react'
import AddBookForm from '../components/AddBookForm'

const AddBook = () => {
  const handleBookAdded = book => {
    console.log('Livro adicionado:', book)
  }

  return (
    <>
      <AddBookForm onBookAdded={handleBookAdded} />
    </>
  )
}

export default AddBook
