import React from 'react';

const Livro = ({ titulo, capa }) => {
  return (
    <div className="book">
      <img src={capa} alt={titulo} />
      <h3>{titulo}</h3>
    </div>
  );
};

export default Livro;
