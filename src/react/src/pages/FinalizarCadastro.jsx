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

export default function FinalizarCadastro(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, error, loading, axiosFetch] = useAxiosFunction();

  const[email, setEmail] = useState("");
  const[username, setUsername] = useState("");
  const[fullName, setFullName] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");

  const[idFamilia, setIdFamilia] = useState("");

  const CadastrarFamilia = (dadoUsuario) => {
    setDadosUsuario(dadoUsuario);
    NewFamily
  }

  let emails = location.state.email;
  let usernames = location.state.username;
  let fullNames = location.state.fullName;
  let passwords = location.state.password;
  let confirmPasswords = location.state.confirmPassword;
  let familiaIds = location.state.famId;
  let familiaNomes = location.state.famNome;

  const RegistrarUsuario = () => {
    debugger;
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/Auth/Register/register',
        data: {
          id:null,
          email: emails,
          username: usernames,
          fullName: fullNames,
          password: passwords,
          confirmPassword: confirmPasswords,
          familiaId: familiaNomes
        }
      }
    )
  }

  let userId = user.id;

  return (
    <>
      <div className="container">

        <h1>Registrar Usuário</h1>

        <Input 
          label="Email"
          value={emails}
          type="text"
          id='email'
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input 
          label="Nome de Usuário"
          value={usernames}
          type="text"
          id='username'
          onChange={(event) => setUsername(event.target.value)}
        />

        <Input 
          label="Nome Completo"
          value={fullNames}
          type="text"
          id='fullName'
          onChange={(event) => setFullName(event.target.value)}
        />

        <Input 
          label="Senha"
          value={passwords}
          type="password"
          id='password'
          onChange={(event) => setPassword(event.target.value)}
        />

        <Input 
          label="Confirme a Senha"
          value={confirmPasswords}
          type="password"
          id='confirmPassword'
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <Input 
          label="ID da Família"
          value={familiaIds}
          type="text"
          id='familiaId'
          onChange={(event) => setIdFamilia(event.target.value)}
        />

        <Input 
          label="Nome da Família"
          value={familiaNomes}
          type="text"
          id='familiaNome'
        />
        
        <ButtonBlack className='link' id='botaoConfirmar' click={RegistrarUsuario} text='Registrar Usuário'></ButtonBlack>
      </div>

      <div hidden id='sucesso'>
        <h1>Cadastro feito com sucesso! Vá para a página da sua família!</h1>
        <ButtonBlack className='link' id='botaoConfirmar'click={() => navigate('/Family', {replace: true, state:{familiaIds, userId}})}></ButtonBlack>
      </div>
    </>
  )
}