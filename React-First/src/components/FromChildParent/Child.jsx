import React from 'react'

const Child = ({ changecolor }) => {
  return (
    <>
    <button onClick={() => changecolor('green')}>
    Change color to green
    </button>
    </>
  )
}

export default Child