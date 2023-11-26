import { Link } from 'react-router-dom'
import Header from "../components/Header.jsx";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input.jsx";
import React, { useState, useEffect } from 'react';
import axios from '../api/api.js';
import useAxiosFunction from '../components/useAxiosFunction.jsx';
import { useNavigate, useLocation } from 'react-router-dom';

export default function newFamilyMember(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [familia, error, loading, axiosFetch] = useAxiosFunction();
  //Dados família
  const [idFamilia, setIdFamilia] = useState("");
  const [nomeFamilia, setNomeFamilia] = useState("");
  const [endereco, setEndereco] = useState("");
  const [finalizado, setFinalizado] = useState(false);

  const postFamilia = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/familia',
        data: {
          id: null,
          nomeFamilia: nomeFamilia,
          endereco: endereco,
        }
      }
    )
    document.getElementById('cadastroFamilia').hidden = true;
    document.getElementById('confirmaCadastro').hidden = false;
  }

  let email = location.state.email;
  let username = location.state.username;
  let fullName = location.state.fullName;
  let password = location.state.password;
  let confirmPassword = location.state.confirmPassword;

  let famId = familia.id;
  let famNome = familia.nomeFamilia

  return(
    <>
      <div id='cadastroFamilia'>
        <div className="head">
          <h2>Cadastrar Nova Família</h2>
          <p>Insira abaixo as informações da Família</p>
        </div>

        <div className="register">
          <Input 
          id='nomeFamilia' 
          label="Nome" 
          text="Carvalho" 
          type="text" 
          onChange={(event) => setNomeFamilia(event.target.value)}
          />
          <Input 
          id='endereco' 
          label="Endereço" 
          type="text" 
          text="Rua tal, número tal" 
          onChange={(event) => setEndereco(event.target.value)}
          />
        </div>
        <div className="actions">
          <ButtonBlack click={() => postFamilia()} text='Cadastrar Família'></ButtonBlack>
        </div>
      </div>

      <div id='confirmaCadastro' hidden>
        <h1>Família cadastrada com sucesso!</h1>
        <button onClick={() => navigate('/finalizarCadastro', {replace: true, state:{email, username, fullName, password, confirmPassword, famId, famNome}})}>Finalizar o Cadastro de Usuário</button>
      </div>
    </>
  )
}