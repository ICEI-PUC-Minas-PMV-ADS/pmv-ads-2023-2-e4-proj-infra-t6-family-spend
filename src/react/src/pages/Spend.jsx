import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input.jsx";
import React, { useState, useEffect } from 'react';

export default function NewSpend(){

  const url = 'https://family-spend-2e147db72cad.herokuapp.com/api/gasto';

  const [gasto, setGasto] = useState ([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then(json => {
        setGasto(json);
      })
    }
    fetchData();
  }, []);

  return(
    <>
      <Header>
        <Link to="../Spending" className='link'>Inicio</Link>
      </Header>      <div className="section">
        <div className="head">
          <h2>Lista de Gastos</h2>
        </div>
        <div className="register">
          <div>{gasto.map((item, index) => (
            <div key = {index}>
              <span>Gasto: {item.nomeGasto}</span>
              <br></br>
              <span>Valor: {item.valor}</span>
              <br/>
              <span>Responsável: {item.nomeUsuario}</span>
            </div>
        ))}
      </div>

<br/>

      <span>Total: 650</span>

      <br/>
          
          <Link to="../spending" className='link'><ButtonWhite text="Voltar"/></Link>
        </div>
      </div>

      <div>{gasto.map((item, index) => (
        <div key = {index}>
          <span>{item.nomeGasto}</span>
        </div>
      ))}</div>
    </>
  )
}