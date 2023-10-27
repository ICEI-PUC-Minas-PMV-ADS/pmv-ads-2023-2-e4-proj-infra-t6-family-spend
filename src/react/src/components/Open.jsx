import '../styles/open.css'
import Logo from "../assets/logo.png";

export default function Open(){
  return(
    <>
      <div className='container'>
        <h1>Family Spend</h1>
        <p>A ferramenta de oragnização perfeita para você e sua familia</p>
        <img src={Logo} alt="" />
      </div>
    </>
  )
}