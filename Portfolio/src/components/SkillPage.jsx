import React from 'react'
import styled from 'styled-components'

const SkillPage = () => {
    const image = [
        {
            url: "/images/html.png"
        },
        {
            url: "/images/css.png"
        },
        {
            url:"/images/js.png"
        },
        {
            url:"/images/bootstrap.png"
        },
        {
            url:"/images/react.png"
        }
    ]
    return (
        <>
            <Container>
                <h1>My Tech Stack</h1>
                <p>Technologies I’ve been working with recently</p>
                <Main>
                    {
                        image.map((value) => (
                            <div id='array' key={value.url}>
                                <img src={value.url} />
                            </div>
                        ))
                    }
                </Main>
            </Container>
        </>
    )
}

export default SkillPage

const Container = styled.div`
    text-align: center;
    margin-top: 20px;
    h1{
        color: #42446E;
        padding-top: 10px;
    }
    p{
        color: #666666;
    }
`

const Main = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    margin: 80px;
`