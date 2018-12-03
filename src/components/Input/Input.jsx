import React from 'react'
import './input.css'



const Input = (props) => {
  const {
    type,
    label,
    value,
    id,
    checked,
    handleChange,
  } = props;

  return(
    <div className='input' style={type==='radio' ? {flexDirection: 'row-reverse'} : {}}>
      <p>{label}</p>
      <input
        checked={checked}
        type={type}
        value={value}
        onChange={handleChange(id)}
      />
    </div>
  )


}

export default Input;
