import '../styles/input.css'

export default function Input({label, text, type, id, onChange, value}) {
  return(
    <>
      <div className="form">
        <label htmlFor={label}>{label}</label>
        <input className="input" type={type} id={id} placeholder={text} onChange={onChange} value={value}/>
      </div>
    </>
  )
}