import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input.jsx";
import React, { useState, useEffect } from 'react';
import useAxios from '../components/useAxios';
import axios from '../api/apiGasto'
import useAxiosFunction from '../components/useAxiosFunction.jsx';

export default function Spend() {

  const [gasto, error, loading, axiosFetch] = useAxiosFunction()

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

  const deletarGasto = (id) => {
    debugger;
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'DELETE',
        url: `/gasto/${id}`,
        data: {
          id: id
        }
      }
    )
  }

  const z = 0;
  const total = Object.values(gasto).reduce((t, {valor}) => t + valor, 0);

  return (
    <>
      <Header>
        <Link to="../spending" className='link'>Inicio</Link>
        <Link to="../importar" className='link'>Importar</Link>
      </Header>     <div className="section">
        <div className="head">
          <h2>Lista de Gastos</h2>
        </div>
        <div className="register">
          <div>{gasto.map((item, index) => (
            <div key={index}>
              <span>Gasto: {item.nomeGasto}</span>
              <br></br>
              <span>Valor: {item.valor}</span>
              <br />
              <span>Responsável: {item.nomeUsuario}</span>
              <button id='btnDeletar' onClick={() => deletarGasto(item.id)}>DELETAR</button>
            </div>
          ))}
          </div>
          <br />
          <span>{total}</span>

          <br />

          <Link to="../spending" className='link'><ButtonWhite text="Voltar" /></Link>
        </div>
      </div>

      <div>{gasto.map((item, index) => (
        <div key={index}>
          <span>{item.nomeGasto}</span>
        </div>
      ))}</div>
    </>
  )
}