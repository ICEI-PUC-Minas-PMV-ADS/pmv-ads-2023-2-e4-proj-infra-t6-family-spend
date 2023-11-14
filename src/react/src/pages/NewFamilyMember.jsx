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
          familiaId: 'string',
          nomeUsuario: document.getElementById('nomeUsuario').value,
          email: document.getElementById('email').value,
          relacaoFamiliar: document.getElementById('relacaoFamiliar').value,
          senha: document.getElementById('senha').value,
          nomeFamilia: 'string',
        }
      }
    )
  }

  return(
    <>
    {console.log(error.response)}
      <Header>
        <Link to="../NewSpend" className='link'>Novo Gasto</Link>
      </Header>
      <div className="section">
        <div className="head">
          <h2>Cadastrar novo Familiar</h2>
          <p>Insira abaixo as informações do Familiar</p>
        </div>
        <div className="register">
          <input id='nomeUsuario' label="Nome" text="Lucas" type="text"/>
          <input id='relacaoFamiliar' label="Relação Familiar" text="Filho" type="text"/>
          <input id='email' label="Email" text="oi@pucminas.br" type="email"/>
          <input id='senha' label="Senha" type="password" text="*****" />
        </div>
        <div className="actions">
          <button onClick={postUsuario}>Cadastrar Familiar</button>
        </div>
      </div>
    </>
  )
}