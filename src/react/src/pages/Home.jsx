import { useState } from 'react';
import ForgotPassword from '../components/ForgotPassword';
import Open from '../components/Open';
import SignIn from '../components/SignIn';
import Login from '../components/Login';
import '../styles/home.css';
import Header from '../components/Header';


export default function Home() {
  const [component, setComponent] = useState("");
  return (
    <>
      <Header 
        setComponent={setComponent} 
        text="Cadastre-se" 
        useBar={false} />
      <div className="main">
        <Open/>
        {(component == "signIn")?<
          SignIn setComponent={setComponent}/>:
          (component == "forgotPassword")?
          <ForgotPassword setComponent={setComponent} />:
          <Login setComponent={setComponent} component={component} />}
      </div>
    </>
  )
}

