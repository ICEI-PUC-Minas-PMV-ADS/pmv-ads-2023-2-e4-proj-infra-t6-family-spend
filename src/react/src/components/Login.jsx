import { Link } from 'react-router-dom'
import '../styles/login.css'
import ButtonBlack from './ButtonBlack'
import ButtonWhite from './ButtonWhite'
import Input from './Input'
import React, { useState, useEffect } from 'react';
import axios from '../api/api.js';
import useAxiosFunction from '../components/useAxiosFunction';

export default function Login(props){

  const [user, error, loading, axiosFetch] = useAxiosFunction();

  const fazerLogin = () => {
    axiosFetch(
      {
        axiosInstance: axios,
        method: 'POST',
        url: '/v1/authenticate/login',
        data: {
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        }
      }
    )
  }

  return(
    <> 
      <div className="container">

        <h1>Login</h1>
        <p>Ainda não possui uma conta? Cadastre-se  
          <span onClick={() => props.setComponent("signIn")}>
            aqui
          </span>
        </p>
        <Input
          label="Email"
          type="text" 
          id='email'
        />
        <Input
          label="Senha"
          type="password"
          id='password'
        />

        <ButtonBlack click={fazerLogin} text='Login'></ButtonBlack>

        <div onClick={() => props.setComponent("forgotPassword")}>
          <ButtonWhite text="Esqueceu sua Senha?"/>
        </div>
        
      </div>
    </>
  )
}