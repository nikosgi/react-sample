import React from 'react'
import './textField.css'



const Input = (props) => {
  const {
    type,
    label,
    value,
    id,
    handleChange,
  } = props;

  return(
    <div className='textField'>
      <p className='label'>{label}</p>
      <input
        className='input'
        type='text'
        value={value}
        onChange={handleChange(id)}
      />
    </div>
  )


}

export default Input;
