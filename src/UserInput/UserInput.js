import React from 'react';

const userInput = (props) => {
  const inStyle = {
    border: '2px solid red'
  }
  return <input style={inStyle} type="text" onChange={props.changed} value={props.currentName}/>
}

export default userInput;