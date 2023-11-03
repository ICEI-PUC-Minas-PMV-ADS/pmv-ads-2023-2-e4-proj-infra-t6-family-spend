import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input";
import { useState, useEffect } from 'react';

export default function NewFamilyMember() {

  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {
      'Content-Type': 'application-json'
    },
      body: JSON.stringify({'nomeusuario': 'fulano'})
    };
    fetch('https://family-spend-2e147db72cad.herokuapp.com/api/usuario', requestOptions)
    .then(response => response.json())
    .then(data => setPostId(data.id));
  }, []);

  const isRegister = true
  function verifyRegister() {
    if (isRegister) {
      alert("Cadastro realizado")
    }
    else{
      alert("Cadastro deu errado")
    }
  }

  return(
    <>
      <Header>
        <Link to="../NewSpend" className='link'>Novo Gasto</Link>
      </Header>
      <div className="section">
        <div className="head">
          <h2>Cadastrar novo Familiar</h2>
          <p>Insira abaixo as informações do Familiar</p>
        </div>
        <div className="register">
          <Input id='nome' label="Nome" text="Lucas" type="text"/>
          <Input id='relacao' label="Relação Familiar" text="Filho" type="text"/>
          <Input id='email' label="Email" text="oi@pucminas.br" type="email"/>
          <Input id='senha' label="Senha" type="password" text="*****" />
        </div>
        <div className="actions">
          <Link to="../spending" className='link' onClick={verifyRegister}><ButtonBlack text="Cadastrar Familiar"/></Link>
          <Link to="../spend" className='link'><ButtonWhite text="Spend"/></Link>
        </div>
      </div>
    </>
  )
}