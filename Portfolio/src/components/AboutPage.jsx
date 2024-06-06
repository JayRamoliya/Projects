import React from 'react'
import styled from 'styled-components'

import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";

const AboutPage = () => {
    const data = [
        {
            profession: "Junior Web Developer",
            type: "Full Time",
            name: "Dr. Rajkumar’s Learning App",
            location: "Bengaluru",
            date:"Sep 2021 - Dec 2021"
        },
        {
            profession: "Web Development Intern",
            type: "Internship",
            name: "IonPixelz Web Solutions",
            location: "Bengaluru",
            date:"Sep 2021 - Dec 2021"
        },
    ];
    return (
        <>
            <Container>
                <Main>
                    <h1>About Me</h1>
                    <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                    <h1>Work Experience</h1>
                    {
                        data.map((value) => (
                            <div id='array' key={value.name}>
                                <div id="top">
                                    <h3>{value.profession}</h3>
                                    <button>Full Time</button>
                                </div>
                                <div id='bottom'>
                                    <p><HiOutlineBuildingOffice />{value.name}</p>
                                    <p><CiLocationOn />{value.location}</p>
                                    <p>{value.date}</p>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                </Main>
            </Container>
        </>
    )
}

export default AboutPage

const Main = styled.div`
    display: flex;
    flex-direction:column;
    /* background-color: red; */
    gap: 30px;
    width: 600px;
    /* height: 100vh; */
    color: #42446E;
    margin: 0 130px;
    padding: 30px 0;

    #array{
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        color: #666666;
    }
    #top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #bottom{
        display: flex;
        justify-content: space-between;
    }
    button{
        color: #018C0F;
        background-color: #D7FFE0;
        font-weight: bold;
        padding: 2px 21px;
        border-radius: 20px;
        border: none;
    }
    hr{
        background-color: #EBEAED;
        margin-top: 10px;
    }

`
const Container = styled.div`
    /* background-color: green; */
`

// {filterBtns.map((value) => (
//     <Button
//       isselected={selectedbtn === value.type}
//       key={value.name}
//       onClick={() => filterFood(value.type)}
//     >
//       {value.name}
//     </Button>
//   ))}