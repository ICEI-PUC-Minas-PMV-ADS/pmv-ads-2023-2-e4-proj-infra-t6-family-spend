import '../styles/signIn.css'
import ButtonBlack from './ButtonBlack'
import Input from './Input'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/api.js';
import useAxiosFunction from '../components/useAxiosFunction.jsx';
import NewFamily from '../pages/NewFamily.jsx';
import { useNavigate } from 'react-router-dom';

export default function SignIn(props) {
  const navigate = useNavigate();
  const [user, error, loading, axiosFetch] = useAxiosFunction();
  const[email, setEmail] = useState("");
  const[username, setUsername] = useState("");
  const[fullName, setFullName] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const[idFamilia, setIdFamilia] = useState("");
  let [ code, setCode] = useState(<div></div>);

  const CadastrarFamilia = (dadoUsuario) => {
    setDadosUsuario(dadoUsuario);
    NewFamily
  }

  function finishLogin (type) {
    if (type == 'confirm') {
      setCode(
        <div id='confirmar'>
          <p>Sua família já está cadastrada no nosso sistema?</p>
          <ButtonBlack className='link' id='botaoSim' click={() => finishLogin('idFamily')} text='Sim'></ButtonBlack>
          <ButtonBlack className='link' id='botaoNao' click={() => navigate('/NewFamily', {replace: true, state:{email, username, fullName, password, confirmPassword}})} text='Não'></ButtonBlack>
        </div>
      );
    }else if(type == 'idFamily'){
      setCode(
      )
      document.getElementById('confirmarSim').hidden = false;
    }
  }

  const registrarUsuario = () => {
    debugger;
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/Auth/Register/register',
        data: {
          familiaId: idFamilia,
          email: email,
          username: username,
          fullName: fullName,
          password: password,
          confirmPassword: confirmPassword
        }
      }
    )
    if(user.success !== true){
      alert("Problema com o Cadastro")
    }
    else{
      alert(user.message)
      props.setComponent('Login')
    }
  }

  let dadoUsuario;

  return (
    <>
      <div className="container">

        <h1>Registrar Usuário</h1>

        <p>Já possui uma conta? Faça login  
          <span onClick={() => props.setComponent("logIn")}>
            aqui
          </span>
        </p>

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

        <div id='confirmarSim' hidden>
          <p>Digite o número de identificação da sua família (peça a um familiar)</p>
            <Input 
              label="ID da Família"
              type="text"
              id='idFamilia'
              onChange={(event) => setIdFamilia(event.target.value)}
            />
            <ButtonBlack className='link' id='botaoCadastro' click={registrarUsuario} text='Registrar Usuário'></ButtonBlack>
        </div>

        <ButtonBlack click={() => finishLogin('confirm')} text='Cadastrar'></ButtonBlack>

        {code}

      </div>
    </>
  )
}