import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input.jsx";
import React, { useState, useEffect } from 'react';
import axios from '../api/apiGasto';
import useAxiosFunction from '../components/useAxiosFunction';

export default function NewSpend() {
  const [gastos, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/gasto',
    });
  }

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [])

  const handleSubmit = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/gasto',
        data: {
          id: null,
          familiaId: 'string',
          usuarioId: 'string',
          nomeGasto: document.getElementById('nomeGasto').value,
          valor: Number(document.getElementById('valor').value),
          data: "2023-10-30",
          nomeUsuario: document.getElementById('nomeUsuario').value,
        }
      }
    )
  }

  return (
    <>
    {console.log(error.response)}
      <div className="section">
        <div className="head">
          <h2>Cadastrar novo Gasto</h2>
          <p>Insira abaixo as informações do Gasto</p>
        </div>
        <div className="register">
          <input id='nomeGasto' label="Nome do Gasto" type="text" />
          <br />
          <input id='valor' label="Preço" type="int" />
          <br />
          <input id='data' label="Data da Compra" type="text" />
          <br />
          <input id='nomeUsuario' label="Nome do Responsável" type="text" />
        </div>
        <div className="actions">
          <Link to="../spend" className='link'><ButtonWhite text="Spend" /></Link>
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </>
  )
}