import React, { Component } from 'react';
import './Person.module.css';
import Aux from '../../../hoc/Aux';
import Radium from "radium";
import Classes from './Person.module.css';

class Person extends  Component {
    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I {this.props.age} yr old</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }


};

export default Person;