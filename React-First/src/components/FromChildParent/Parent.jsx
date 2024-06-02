import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [color, setColor] = useState('red')

    const changecolor = (color) => {
      setColor(color)
    }
  return (
    <>
        {
          "this is color:" + color
        }
        <Child changecolor={changecolor}/>
    </>
  )
}

export default Parent