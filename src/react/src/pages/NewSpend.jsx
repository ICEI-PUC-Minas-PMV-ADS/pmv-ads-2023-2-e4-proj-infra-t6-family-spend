import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input.jsx";
import React, { useState, useEffect } from 'react';

export default function NewSpend(){

  const url = 'https://family-spend-2e147db72cad.herokuapp.com/api/gasto';

  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {
      'Content-Type': 'application-json'
    },
      body: JSON.stringify({'nomeusuario': 'fulano'})
    };
    fetch('https://family-spend-2e147db72cad.herokuapp.com/api/gasto', requestOptions)
    .then(response => response.json())
    .then(data => setPostId(data.id));
  }, []);


  return(
    <>
      <Header>
        <Link to="../Spending" className='link'>Inicio</Link>
      </Header>      <div className="section">
        <div className="head">
          <h2>Cadastrar novo Gasto</h2>
          <p>Insira abaixo as informações do Gasto</p>
        </div>
        <div className="register">
          <Input label="Gasto" text="R$ 32,99" type="number"/>
          <Input label="Responsável" text="Fulano" type="text"/>
          <Input label="Descrição" text="Supermercado" type="text"/>
        </div>
        <div className="actions">
          <Link to="../spending" className='link'><ButtonBlack text="Registrar gasto"/></Link>
          <Link to="../spending" className='link'><ButtonWhite text="Voltar"/></Link>
        </div>
      </div>
    </>
  )
}