import React from 'react';
import './Person.css';
import Radium from "radium";

const person = (props) => {
    const style = {
        width: '150px',
        boxShadow: '2px 1px',
        height: '20px',
        textAlign: 'center'
    }
    const radStyle = {
        '@media (min-width: 500px' : {
            width: '450px',
        }
    }
return (
        <div className='Person' style={radStyle}>
            <p onClick={props.click}>I'm a {props.name} and I {props.age} yr old</p>
            <p>{props.children}</p>
            <input style={style} type='text' onChange={props.changed} value={props.name}/>
        </div>
     )
};

export default Radium(person);