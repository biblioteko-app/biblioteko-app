import React from 'react';
import AddClassForm from '../components/AddClassForm';

const AddClass = () => {
  const handleClassAdded = () => {
    // Lógica para manipular o turma adicionade
    // Exemplo: exibir mensagem de sucesso, redirecionar para outra página, etc.
  };

  return (
    <>
      <AddClassForm onClassAdded={handleClassAdded} />
    </>
  );
};

export default AddClass;
