import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input.jsx";
import React, { useState, useEffect } from 'react';
import axios from '../api/apiGasto';
import useAxiosFunction from '../components/useAxiosFunction';

export default function NewSpend(){
  const [posts, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
    });
  }

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [])

  let gastoNovo = {
    familiaId: 'teste',
    usuarioId: 'teste',
    nomeGasto: 'teste',
    valor: 0,
    nomeUsuario: 'user',
  }

  const handleSubmit = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        requestConfig:{
          data: gastoNovo
        }
      }
    )
  }

  return(
    <>
    {console.log(error.response)}
      <div className="section">
        <div className="head">
          <h2>Cadastrar novo Gasto</h2>
          <p>Insira abaixo as informações do Gasto</p>
        </div>
        <div className="register">
          <Input id='nomeGasto' label="Nome do Gasto" type="text"/>
          <Input id='valor' label="Preço" type="int"/>
          <Input id='data' label="Data da Compra" type="text"/>
          <Input id='nomeUsuario' label="Nome do Responsável" type="text"/>
        </div>
        <div className="actions">
          <Link to="../spend" className='link'><ButtonWhite text="Spend"/></Link>
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </>
  )
}