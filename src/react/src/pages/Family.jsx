import { Link } from 'react-router-dom'
import Header from "../components/Header.jsx";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input.jsx";
import React, { useState, useEffect } from 'react';
import useAxios from '../components/useAxios.jsx';
import axios from '../api/api.js'
import useAxiosFunction from '../components/useAxiosFunction.jsx';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Family(props) {

  const navigate = useNavigate();
  const location = useLocation();

  const [familia, errorFamilia, loadingFamilia, axiosFetchFamilia] = useAxiosFunction()
  const [gasto, errorGasto, loadingGasto, axiosFetchGasto] = useAxiosFunction()
  const [user, errorUser, loadingUser, axiosFetchUser] = useAxiosFunction()


  let familiaId = location.state.familiaIds;

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [])

  const deletarGasto = (familiaId) => {
    axiosFetchFamilia(
      {
        axiosInstance: axios,
        method: 'DELETE',
        url: `/familia/${familiaId}`,
        data: {
          id: id
        }
      }
    )
  }

  const buscarUsuarios = (familiaId) => {
    axiosFetchUser({
      axiosInstance: axios,
      method: 'GET',
      url: `/Auth/GetFamilia/${familiaId}`,
      data:{
        familiaId: familiaId
      }
    })
  }

  const buscarGastos = (familiaId) => {
    axiosFetchGasto({
      axiosInstance: axios,
      method: 'GET',
      url: `/gasto/GetFamilia/${familiaId}`,
      data:{
        familiaId: familiaId
      }
    })
  }

  const z = 0;
  const total = Object.values(gasto).reduce((t, {valor}) => t + valor, 0);

  return (
    <>
    {console.log(error.response)}
      <Header useBar='true' >
        <Link to="../spending" className='link'>Inicio</Link>
        <Link to="../importar" className='link'>Importar</Link>
      </Header>     <div className="section">
        <div className="head">
          <h2>Lista de Gastos</h2>
        </div>
        <div className="register">
          <div>{user.map((item, index) => (
            <div key={index}>
              <span>{item.FullName}</span>
              <div>{gas.map((itemGasto, indexGasto) =>(
                  <div key = {indexGasto}>
                    
                  </div>
              ))
              }
              </div>
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