import React, { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
import Parent from './components/FromParentChild/Parent'
import Parent1 from './components/FromChildParent/Parent'
import FetchAPI from './components/FetchAPI'
import Reducer from './components/Reducer'
import Dashboard from './components/Dashboard'
import { UserProvider } from './contaxt/UserProvider'

const initivalue = () => {
  console.log('i am run');
  return 0;
}

const App = () => {
  // const [count,setCount] = useState(0)
  // const [count,setCount] = useState(() => initivalue())
  const [count,setCount] = useState(initivalue) // short way in above line

  const ref = useRef(0)

  // let count = 0; // don't use like this use like useState

  const plus = () => {
    // count++;

    // setCount(count + 1)
    // setCount(count + 1) 
    // setCount(count + 1) // don't use this if you can use this not show 3 show only 1 because overwrite all use like this

    setCount((prevcount) => prevcount + 1)
    setCount((prevcount) => prevcount + 1)
    setCount((prevcount) => prevcount + 1) // use like this show 3 
    console.log(count);
    ref.current++
    console.log(ref.current);
  }
  
  const sub = () => {
    // count--;
    setCount(count - 1)
    console.log(count);
  }

  useEffect(() => {
    // Fn logic will be written here

    return () => {
      // this is clean up function

    }
    console.log('Auto Trigger');
  },[
    // this is dependency array
  ])

  // const inputel = document.getElementById('myinp')

  // const handlesubmit = () => {
  //   console.log(inputel.value);
  // }

  const inputRef = useRef(null)

  const handlesubmit = () => {
    inputRef.current.focus()
    inputRef.current.style.backgroundColor="red"
    console.log(inputRef.current.value);
  }

  return (
    <div>
    <UserProvider>
      <Dashboard/>
    </UserProvider>
      <input ref={inputRef} id='myinp' type="text" />
      <button onClick={handlesubmit}>Foucs</button>
      <Reducer/>
      <Nav/>
      <Aside/>
      <Main/>
      <Footer/>
      <Parent/>
      <Parent1/>
      <div>
        <button onClick={plus}>+</button>
        {count}
        <button onClick={sub}>-</button>
      </div>
      <FetchAPI/>
    </div>
  )
}

export const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App
// export default App2 // don't use like this only one default
