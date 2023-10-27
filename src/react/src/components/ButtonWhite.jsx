import '../styles/buttonWhite.css'

export default function ButtonWhite(props) {
  return (
    <>
      <button id='buttonWhite'>{props.text}{props.children}</button>
    </>
  )
}