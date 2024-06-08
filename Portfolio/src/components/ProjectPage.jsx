import React from 'react'
import styled from 'styled-components'

import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectPage = () => {

    const data = [
        {
            image: "",
            title: "Project Tile goes here",
            desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            tech: "HTML , JavaScript, SASS, React",
        },
        {
            image: "",
            title: "Project Tile",
            desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            tech: "HTML , JavaScript, SASS, React",
        },
        {
            image: "",
            title: "Project Tile",
            desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            tech: "HTML , JavaScript, SASS, React",
        }
    ]
    return (
        <>
            <Main>
                <Top>
                    <h1>Projects</h1>
                    <p>Things I’ve built so far</p>
                </Top>
                <Bottom>
                    {
                        data.map((value) => (
                            <div key="title" className='content'>
                                <div className='image'>
                                    <img src="/images/html.png" />
                                </div>
                                <h1>Project Tile goes here</h1>
                                <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                                <p>Tech stack : HTML , JavaScript, SASS, React</p>
                                <div className="preview">
                                <FaLink />
                                <a href="#">Live Preview</a>
                                <FaGithub />
                                <a href="#">Github</a>
                                </div>
                            </div>
                        ))
                    }
                </Bottom>
            </Main>
        </>
    )
}

export default ProjectPage

const Main = styled.div`
`
const Bottom = styled.div`
    display: flex;
    margin-top: 25px;
    /* width: 500px; */
    margin: 25px 50px;
    /* gap: 40px; */
    justify-content: space-around;
    .content{
        /* width: 350px; */
        border-radius: 20px;
        border: 1px solid #000;
        padding: 20px;
    }
`

const Top = styled.div`
    text-align: center;
    h1{
        color: #42446E;
        padding-top: 10px;
    }
    p{
        color: #666666;
    }
`