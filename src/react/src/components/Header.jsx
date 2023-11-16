import '../styles/header.css'
import { Link } from 'react-router-dom'
import { FaHouseUser, FaMoneyBill,FaUserGroup } from "react-icons/fa6";
import { useState, useEffect } from 'react';




export default function Header (props) {

  let [ code, useCode] = useState(<div></div>);

  function Switch() {
    const menu = document.querySelector("#menu");  
    const navigation = document.querySelector("#navigation");  

    menu.classList.toggle("open");
    navigation.classList.toggle("open");
  }

  useEffect(() => {
    verifyMenuBar()
  }, [])

  function verifyMenuBar() {  
    if (props.useBar) {
      useCode(
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
      )
    }
    else{
      useCode(null);
    }
  }

  return (
    <>
      <div id='header'>
        <div className="hamburguer">
          {code}
        </div>
        <h1 className='logo'>Family Spend</h1>
        <h2 className="user">{props.text}</h2>
      </div>

      <div id='navigation'>
        <div className="options">

          <Link to="../Spend" className='nextPage'>
            <FaHouseUser />
            <p>Gastos</p>
          </Link>

          <Link to="../NewSpend" className='nextPage'>
            <FaMoneyBill />
            <p>Novo Gasto</p>
          </Link>

          <Link to="../CreateFamilyMember" className='nextPage'>
            <FaUserGroup  />
            <p>New Family Member</p>
          </Link>

        </div>

      </div>
    </>
  )
}