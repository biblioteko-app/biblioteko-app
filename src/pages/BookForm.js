import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BookForm = ({ onBookAdded }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Aqui você pode fazer a requisição ao backend para adicionar o livro no banco de dados
      // Exemplo fictício de uma requisição usando fetch:
      const response = await fetch('https://api.example.com/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // O livro foi adicionado com sucesso
        onBookAdded();
      } else {
        // Houve um erro ao adicionar o livro
        throw new Error('Failed to add book');
      }
    } catch (error) {
      console.error(error);
      // Lidar com o erro de adicionar o livro aqui
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register('title', { required: true })} />
        {errors.title && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" {...register('author', { required: true })} />
        {errors.author && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="isbn">ISBN:</label>
        <input type="text" id="isbn" {...register('isbn', { required: true })} />
        {errors.isbn && <span>This field is required</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>Add Book</button>
    </form>
  );
};

export default BookForm;
