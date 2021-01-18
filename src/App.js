import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';


function App() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);
  //segundo paramêtros são elementos que ficarão em "watch"

  //useState retorna um array com 2 posições
  // 1. Variável com o seu valor inicial e 
  // 2. Função para atualizarmos esse valor

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);

    api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Diego Fernandes"
    }).then (response=>{
      console.log("a")
      const project = response.data;
      setProjects([...projects, project])

    })

    
    
    
  } 

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key ={project.id}>{project.title}<br></br>{project.owner}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    
    </>
    ); 
}

export default App;