import React, { useState, useEffect } from 'react';
import Livro from './Livro';
import axios from 'axios';

const ListaLivros = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/livros') // Altere a URL para a rota correta do seu servidor Java
      .then(response => {
        const livrosConcluidos = response.data.filter(livro => livro.concluido);
        setLivros(livrosConcluidos);
      })
      .catch(error => {
        console.error('Erro ao buscar os livros:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Livros Concluídos</h1>
      <div className="livros-lista">
        {livros.map(livro => (
          <Livro key={livro.id} titulo={livro.titulo} capa={livro.capa} />
        ))}
      </div>
    </div>
  );
};

export default ListaLivros;
