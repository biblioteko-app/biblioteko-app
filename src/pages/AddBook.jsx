import React from 'react';
import AddBookForm from '../components/AddBookForm';
import Books from '../components/Book/Book';

const AddBook = ({ user }) => {
  const handleBookAdded = () => {
    // Lógica para manipular o livro adicionado
    // Exemplo: exibir mensagem de sucesso, redirecionar para outra página, etc.
  };

  return (
    <>
      <AddBookForm onBookAdded={handleBookAdded} user={ user }/>
    </>
  );
};

export default AddBook;
