import React, { useContext } from 'react'
import { UserContaxt } from '../contaxt/UserProvider'

const Nav = (props) => {
  const user = useContext(UserContaxt);
  // const {name,email} = user;
  console.log(user);
  return (
    <div className='nav center'>
      {/* <h1>{name}</h1>
      <h1>{email}</h1> */}
    </div>
  )
}

export default Nav