import React from 'react'
import '../css/CustomButton.css'
const CustomButton = ({ name }) => {
  return (
    <>
        <div className='myButton'>{ name }</div>
    </>
  )
}

export default CustomButton