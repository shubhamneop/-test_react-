import React from 'react';
// import './Person.css';
import Radium from "radium";
import styled from 'styled-components';

const StyleDiv = styled.div`
width: 60%;
margin:16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;
  @media (min-width: 500px) : {
            width: 450px,
        }
`;
const person = (props) => {
    const style = {
        width: '150px',
        boxShadow: '2px 1px',
        height: '20px',
        textAlign: 'center'
    }
    const radStyle = {
        '@media (min-width: 500px)' : {
            width: '450px',
        }
    }
return (
    <StyleDiv>
            <p onClick={props.click}>I'm a {props.name} and I {props.age} yr old</p>
            <p>{props.children}</p>
            <input style={style} type='text' onChange={props.changed} value={props.name}/>
    </StyleDiv>
)
};

export default person;