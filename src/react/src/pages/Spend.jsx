import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/spend.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import React, { useState, useEffect } from 'react';
import axios from '../api/api.js'
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
    {/* {console.log(error.response)} */}
      <Header useBar={true}/>
      <div className="section">
        <div className="head">
          <h2>Lista de Gastos</h2>
        </div>
        <table className='table'>
          <thead>
            <th>Responsável</th>
            <th>Gasto</th>
            <th>Valor</th>
          </thead>
          {gasto.map((item, index) => (
            <tr key={index}>
              <td>{item.nomeUsuario}</td>
              <td>{item.nomeGasto}</td>
              <td>{item.valor}</td>
              <td>
                <ButtonBlack id='btnDeletar' text='Deletar' click={() => deletarGasto(item.id)}></ButtonBlack>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td><span>Total:</span></td>
            <td>{total}</td>
          </tr>
        </table>
          <Link to="../spending" className='link'><ButtonWhite text="Voltar" /></Link>
      </div>

      
    </>
  )
}