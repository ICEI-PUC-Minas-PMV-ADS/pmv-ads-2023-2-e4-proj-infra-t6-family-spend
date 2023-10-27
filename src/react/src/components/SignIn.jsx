import Input from "./input";
import '../styles/signIn.css'
import ButtonBlack from './ButtonBlack'


export default function SignIn(props) {
  return (
    <>
      <div className="container">      
        <h2>Criar Conta</h2>
        <p>Já possui conta? Faça Login  
          <span onClick={() => props.setComponent("")}>
            aqui
          </span>
        </p>
        <Input label="Nome" text="Lucas" type="text"/>
        <Input label="Relação Familiar" text="Pai" type="text"/>
        <Input label="Email" text="oi@pucminas.br" type="email"/>
        <Input label="Senha" type="password" text="*****" />
        <div className="buttonBorder" onClick={() => props.setComponent("")}><ButtonBlack text="Cadastrar"/></div>
      </div>
    </>
  )
}