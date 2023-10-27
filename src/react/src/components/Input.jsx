import '../styles/input.css'

export default function Input({label, text, type}) {
  return(
    <>
      <div className="form">
        <label htmlFor={label}>{label}</label>
        <input className="input" type={type} id={label} placeholder={text}/>
      </div>
    </>
  )
}