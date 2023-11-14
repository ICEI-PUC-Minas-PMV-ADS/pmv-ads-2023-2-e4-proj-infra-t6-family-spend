import '../styles/buttonBlack.css'

export default function ButtonBlack(props) {
  return (
    <>
      <button id='button' onClick={props.click}>{props.text}</button>
    </>
  )
}