const BASE_URL = 'https://api.example.com'; // Substitua pela URL base da sua API

const bookService = {
  addBook: async (bookData) => {
    try {
      const response = await fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        const data = await response.json(F);
        return data; // Retorna os dados do livro adicionado, se necessário
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // Outros métodos para manipulação dos livros
  // Retorna todos os livros
  getBooks: async () => {
    try {
      const response = await fetch(`${BASE_URL}/books`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data; // Retorna os dados dos livros, se necessário
      } else {
        throw new Error('Failed to fetch books');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },


  // Obter detalhes de um livro específico
  getBookDetails: async (bookId) => {
    try {
      const response = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data; // Retorna os dados do livro, se necessário
      } else {
        throw new Error('Failed to fetch book details');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // Atualizar um livro
  updateBook: async (bookId, bookData) => {
    try {
      const response = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        const data = await response.json();
        return data; // Retorna os dados do livro atualizado, se necessário
      } else {
        throw new Error('Failed to update book');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
},

  // Deletar um livro
  deleteBook: async (bookId) => {
    try {
      const response = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data; // Retorna os dados do livro deletado, se necessário
      } else {
        throw new Error('Failed to delete book');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

};

export default bookService;