import { Link } from 'react-router-dom'
import '../styles/login.css'
import ButtonBlack from './ButtonBlack'
import ButtonWhite from './ButtonWhite'
import Input from './Input'

export default function Login(props){
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
          text="oi@pucminas.br"
        />

        <Input
          label="Senha"
          type="password"
          text="*****"
        />

        <Link to="spending" className='link'><ButtonBlack text="Login"/></Link>

        <div onClick={() => props.setComponent("forgotPassword")}>
          <ButtonWhite text="Esqueceu sua Senha?"/>
        </div>
        
      </div>
    </>
  )
}