import React from 'react'
import Child from './Child'

const Parent = () => {
    const color = "red"
  return (
    <>
        <Child name="Jay" color={color} />
    </>
  )
}

export default Parent