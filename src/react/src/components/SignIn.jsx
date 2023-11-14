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

        <h1>SignIn</h1>
        <p>Ja possui uma conta? Faça login
          <span onClick={() => props.setComponent("login")}>
            aqui
          </span>
        </p>

        <Input 
          label="Email"
          type="text"
          id='email'
        />

        <Input 
          label="Nome de Usuário"
          type="text"
          id='username'
        />

        <Input 
          label="Nome Completo"
          type="text"
          id='fullName'
        />

        <Input 
          label="Senha"
          type="password"
          id='password'
        />

        <Input 
          label="Confirme a Senha"
          type="password"
          id='confirmPassword'
        />

        <ButtonBlack className='link' click={fazerLogin} text='Login'></ButtonBlack>
      </div>
    </>
  )
}