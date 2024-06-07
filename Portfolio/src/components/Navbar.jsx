import React from 'react'
import styled from 'styled-components'

import { SiGithub } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Header from './HelloPage';


const Navbar = () => {
    return (
        <>
            <Main>
                <img src="/images/logo 1.png"/>
                <Right>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Tech Stack</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li><SiGithub /></li>
                        <li><AiFillTwitterCircle /></li>
                        <li><FaLinkedin /></li>
                    </ul>
                </Right>
            </Main>
            <Header/>
        </>
    )
}
export default Navbar

const Main = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    height: 50px;
`

const Right = styled.div`
    ul{
        display: flex;
        align-items: center;
        height: 50px;
        justify-content: center;
        list-style-type: none;
        gap: 25px;
        font-weight: medium;
    }
    li{
        color: #666666;
        font-size: 20px;
    }
`