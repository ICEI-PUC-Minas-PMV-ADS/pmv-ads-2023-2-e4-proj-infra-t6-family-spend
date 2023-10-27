import ButtonBlack from "./ButtonBlack";
import ButtonWhite from "./ButtonWhite";
import Input from "./input";


export default function ForgotPassword(props) {

  return (
    <> 
      <div className="container">
        <h1>Esqueceu sua senha?</h1>
        <p>Receba uma nova senha por e-mail</p>
        <Input label="Email" text="oi@pucminas.br" type="email"/>
        <ButtonBlack>
          <p onClick={() => props.setComponent("")}>Enviar</p>
        </ButtonBlack>
        <ButtonWhite>
          <p onClick={() => props.setComponent("")}>Voltar</p>
        </ButtonWhite>
      </div>
    </>
  )
}