import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "../styles/newFamilyMember.css";
import ButtonBlack from '../components/ButtonBlack.jsx'
import ButtonWhite from '../components/ButtonWhite.jsx'
import Input from "../components/Input.jsx";


export default function NewSpend(){
  return(
    <>
      <Header>
        <Link to="../Spending" className='link'>Inicio</Link>
      </Header>      <div className="section">
        <div className="head">
          <h2>Cadastrar novo Gasto</h2>
          <p>Insira abaixo as informações do Gasto</p>
        </div>
        <div className="register">
          <Input label="Gasto" text="R$ 32,99" type="number"/>
          <Input label="Data" text="DD/MM/AA" type="date"/>
          <Input label="Descrição" text="Supermercado" type="text"/>
        </div>
        <div className="actions">
          <Link to="../spending" className='link'><ButtonBlack text="Registrar gasto"/></Link>
          <Link to="../spending" className='link'><ButtonWhite text="Voltar"/></Link>
        </div>
      </div>
    </>
  )
}