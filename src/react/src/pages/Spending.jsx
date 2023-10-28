import Header from "../components/Header";
import { Link } from 'react-router-dom'


export default function Spending() {
  return (
    <>
      <Header>
        <Link to="../CreateFamilyMember" className='link'>Criar Familiar</Link>
      </Header>
    </>
  )
}