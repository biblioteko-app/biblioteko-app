import React from 'react';
import AddBookForm from '../components/AddBookForm';

const AddBook = () => {
  const handleBookAdded = () => {
    // Lógica para manipular o livro adicionado
    // Exemplo: exibir mensagem de sucesso, redirecionar para outra página, etc.
  };

  return (
    <>
      <AddBookForm onBookAdded={handleBookAdded} />
    </>
  );
};

export default AddBook;
