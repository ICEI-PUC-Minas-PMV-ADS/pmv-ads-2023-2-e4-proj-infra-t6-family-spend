import Header from "../components/Header";
import { Link } from 'react-router-dom'


export default function Spending() {
  return (
    <>
      <Header useBar='true'>
        <Link to="../CreateFamilyMember" className='link'>Criar Familiar</Link>
      </Header>
    </>
  )
}