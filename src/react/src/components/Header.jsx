import '../styles/header.css'


export default function Header (props) {

  function Switch() {
    const menu = document.querySelector("#menu");
    menu.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  return (
    <>
      <div className='header'>
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
        <h1 className='logo'>Family Spend</h1>
        <h2 className="user" onClick={() => props.setComponent("signIn")}>Cadastre-se</h2>
      </div>
    </>
  )
}