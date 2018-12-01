import React from 'react'




const Input = (props) => {
  const {
    type,
    label,
    value,
    id,
    handleChange,
  } = props;

  return(
    <span>
      <p>{label}</p>
      <input type={type} value={value} onChange={handleChange(id)}/>

    </span>
  )


}

export default Input;
