import React from 'react'
import styled from 'styled-components'


const Header = () => {
  return (
    <>
        <Main>
            <h1>Hi 👋,<br/>My name is<br/> Jay Ramoliya<br/> I build things for web</h1>
            <img src="/images/jay.png" alt="" srcset="" />
        </Main>
    </>
  )
}

export default Header

const Main = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 70px);
    color: #42446E;
    
    h1{
        font-size: 38px;
        font-weight: bold;
    }
    img{
        width: 349px;
        height: 349px;
        border-radius: 50%;
    }
`
