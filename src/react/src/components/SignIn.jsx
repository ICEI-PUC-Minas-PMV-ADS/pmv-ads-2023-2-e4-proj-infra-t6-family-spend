import '../styles/signIn.css'
import ButtonBlack from './ButtonBlack'
import Input from './Input'
import React, { useState, useEffect } from 'react';
import axios from '../api/api.js';
import useAxiosFunction from '../components/useAxiosFunction';


export default function SignIn(props) {
  const [user, error, loading, axiosFetch] = useAxiosFunction();

  const fazerLogin = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/v1/authenticate/register',
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

  return (
    <>
      <div className="container">

        <h1>Login</h1>
        <p>Ainda não possui uma conta? Cadastre-se
          <span onClick={() => props.setComponent("signIn")}>
            aqui
          </span>
        </p>

        <input id='email'
          label="Email"
          type="text"
        />

        <input id='username'
          label="Nome de Usuário"
          type="text"
        />

        <input id='fullName'
          label="Nome Completo"
          type="text"
        />

        <input id='password'
          label="Senha"
          type="password"
        />

        <input id='confirmPassword'
          label="Confirme a Senha"
          type="password"
        />

        <button className='link' onClick={fazerLogin}>Login</button>
      </div>
    </>
  )
}