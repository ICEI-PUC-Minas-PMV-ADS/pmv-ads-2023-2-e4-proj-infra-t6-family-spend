import '../styles/header.css'


export default function Header (props) {

  function Switch() {
    const menu = document.querySelector("#menu");  
    menu.classList.toggle("open");
    ;
  }

  return (
    <>
      <div className='header'>
        <div className="hamburguer">
          <div className="center">
          <div 
            className="" 
            id="menu"
            onClick={Switch}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        </div>
        <h1 className='logo'>Family Spend</h1>
        <h2 className="user" onClick={() => props.setComponent("signIn")}>{props.text}{props.children}</h2>
      </div>
    </>
  )
}