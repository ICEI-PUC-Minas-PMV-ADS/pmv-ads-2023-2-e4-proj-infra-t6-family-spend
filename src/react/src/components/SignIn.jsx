import '../styles/signIn.css'
import ButtonBlack from './ButtonBlack'
import Input from './Input'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/api.js';
import useAxiosFunction from '../components/useAxiosFunction.jsx';
import NewFamily from '../pages/NewFamily.jsx';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [user, error, loading, axiosFetch] = useAxiosFunction();
  const[email, setEmail] = useState("");
  const[username, setUsername] = useState("");
  const[fullName, setFullName] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");

  const CadastrarFamilia = (dadoUsuario) => {
    setDadosUsuario(dadoUsuario);
    NewFamily
  }


  const confirmar = (param) => {
    if(param == 'con'){
      document.getElementById("confirmar").hidden = false;
      document.getElementById("botaoConfirmar").hidden = true
    }
    else if(param == 'sim'){
      document.getElementById("confirmarSim").hidden = false;
      document.getElementById("confirmarNao").hidden = true;
    }
    else{
      document.getElementById("confirmarNao").hidden = false;
      document.getElementById("confirmarSim").hidden = true;
    }
  }

  const registrarUsuario = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/Auth/Register/register',
        data: {
          email: document.getElementById('email').value,
          username: document.getElementById('username').value,
          fullName: document.getElementById('fullName').value,
          password: document.getElementById('password').value,
          confirmPassword: document.getElementById('confirmPassword').value,
        }
      }
    )
  }

  let dadoUsuario;

  return (
    <>
      <div className="container">

        <h1>Registrar Usuário</h1>

        <Input 
          label="Email"
          type="text"
          id='email'
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input 
          label="Nome de Usuário"
          type="text"
          id='username'
          onChange={(event) => setUsername(event.target.value)}
        />

        <Input 
          label="Nome Completo"
          type="text"
          id='fullName'
          onChange={(event) => setFullName(event.target.value)}
        />

        <Input 
          label="Senha"
          type="password"
          id='password'
          onChange={(event) => setPassword(event.target.value)}
        />

        <Input 
          label="Confirme a Senha"
          type="password"
          id='confirmPassword'
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <div id='confirmar' hidden>
            <p>Sua família já está cadastrada no nosso sistema?</p>
            <ButtonBlack className='link' id='botaoSim' click={() => confirmar('sim')} text='Sim'></ButtonBlack>
            <ButtonBlack className='link' id='botaoNao' click={() => confirmar('nao')} text='Não'></ButtonBlack>
        </div>

        <div id='confirmarSim' hidden>
          <p>Digite o número de identificação da sua família (peça a um familiar)</p>
            <Input 
              label="ID da Família"
              type="text"
              id='idFamilia'
            />
        </div>

        <div id='confirmarNao' hidden>
          <button onClick={() => navigate('/NewFamily', {replace: true, state:{email, username, fullName, password, confirmPassword}})}>Cadastrar sua Família</button>
        </div>
        <ButtonBlack className='link' id='botaoConfirmar' click={() => confirmar('con')} text='Registrar Usuário'></ButtonBlack>
      </div>
    </>
  )
}