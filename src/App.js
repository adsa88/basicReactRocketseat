import React, { useState } from 'react';
import Header from './components/Header';


function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  //useState retorna um array com 2 posições
  // 1. Variável com o seu valor inicial e 
  // 2. Função para atualizarmos esse valor

  function handleAddProject(){
    // projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

  }

  return (
    <>
    {/* <Header title="Working Sample"/>   */}
    {/* Ele só fecha, sem abrir(?) */}
    <Header title="Projects">
    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>
    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </Header>  
    </>
    ); 
}

export default App;