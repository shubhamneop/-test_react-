import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        width: '150px',
        boxShadow: '2px 1px',
        height: '20px',
        textAlign: 'center'
    }
return (
        <div className='Person'>
            <p onClick={props.click}>I'm a {props.name} and I {props.age} yr old</p>
            <p>{props.children}</p>
            <input style={style} type='text' onChange={props.changed} value={props.name}/>
        </div>
     )
};

export default person;