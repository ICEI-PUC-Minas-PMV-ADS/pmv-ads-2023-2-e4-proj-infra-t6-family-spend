import '../styles/buttonWhite.css'

export default function ButtonWhite(props) {
  return (
    <>
      <button id='buttonWhite' onClick={props.click}>{props.text}</button>
    </>
  )
}