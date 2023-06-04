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
};

export default bookService;