import '../styles/buttonBlack.css'

export default function ButtonBlack(props) {
  return (
    <>
      <button className='button' id={props.id} onClick={props.click}>{props.text}</button>
    </>
  )
}