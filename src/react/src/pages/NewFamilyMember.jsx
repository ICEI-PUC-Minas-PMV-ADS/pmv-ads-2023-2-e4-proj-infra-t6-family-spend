import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input";
import React, { useState, useEffect } from 'react';
import axios from '../api/api.js';
import useAxiosFunction from '../components/useAxiosFunction';

export default function newFamilyMember() {
  const [usuarios, error, loading, axiosFetch] = useAxiosFunction();

  const [user, setUser] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/usuario',
    });
  }

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [])

  const postUsuario = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/usuario',
        data: {
          id: null,
          familiaId: '653ed7469c412eb335296e15',
          nomeUsuario: document.getElementById('nomeUsuario').value,
          email: document.getElementById('email').value,
          senha: document.getElementById('senha').value,
          nomeFamilia: 'string',
        }
      }
    )
  }

  return(
    <>
    {console.log(error.response)}
      <Header useBar='true'>
        <Link to="../NewSpend" className='link'>Novo Gasto</Link>
      </Header>
      <div className="section">
        <div className="head">
          <h2>Cadastrar novo Familiar</h2>
          <p>Insira abaixo as informações do Familiar</p>
        </div>
        <div className="register">
          <Input id='nomeUsuario' label="Nome" text="Lucas" type="text"/>
          <Input id='email' label="Email" text="oi@pucminas.br" type="email"/>
          <Input id='senha' label="Senha" type="password" text="*****" />
        </div>
        <div className="actions">
          <ButtonBlack onClick={postUsuario} text='Cadastrar Familiar' ></ButtonBlack>
        </div>
      </div>
    </>
  )
}