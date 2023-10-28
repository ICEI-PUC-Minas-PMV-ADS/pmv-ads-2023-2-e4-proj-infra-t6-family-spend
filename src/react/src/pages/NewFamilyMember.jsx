import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input";

export default function NewFamilyMember() {
  const isRegister = true
  function verifyRegister() {
    if (isRegister) {
      alert("Cadastro realizado")
    }
    else{
      alert("Cadastro deu errado")
    }
  }

  return(
    <>
      <Header>
        <Link to="../NewSpend" className='link'>Novo Gasto</Link>
      </Header>
      <div className="section">
        <div className="head">
          <h2>Cadastrar novo Familiar</h2>
          <p>Insira abaixo as informações do Familiar</p>
        </div>
        <div className="register">
          <Input label="Nome" text="Lucas" type="text"/>
          <Input label="Relação Familiar" text="Filho" type="text"/>
          <Input label="Email" text="oi@pucminas.br" type="email"/>
          <Input label="Senha" type="password" text="*****" />
        </div>
        <div className="actions">
          <Link to="../spending" className='link' onClick={verifyRegister}><ButtonBlack text="Cadastrar Familiar"/></Link>
          <Link to="../spending" className='link'><ButtonWhite text="Voltar"/></Link>
        </div>
      </div>
    </>
  )
}