import React from 'react'
import './radio.css'



const Radio = (props) => {
  const {
    children,
    label,
    value,
    id,
    checked,
    handleChange,
  } = props;

  return(
    <div className='radio'>
      <input
        checked={checked}
        type='radio'
        value={value}
        onChange={handleChange(id)}
      />
      <p className='label'>{label}</p>
    </div>
  )


}

export default Radio;
