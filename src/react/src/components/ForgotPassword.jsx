import ButtonBlack from "./ButtonBlack";
import ButtonWhite from "./ButtonWhite";
import Input from "./Input";


export default function ForgotPassword(props) {

  return (
    <> 
      <div className="container">
        <h1>Esqueceu sua senha?</h1>
        <p>Receba uma nova senha por e-mail</p>
        <Input label="Email" text="oi@pucminas.br" type="email"/>
        <div onClick={() => props.setComponent("")}><ButtonBlack text="Enviar"/></div>
        <div onClick={() => props.setComponent("")}><ButtonWhite text="Voltar"/></div>
      </div>
    </>
  )
}