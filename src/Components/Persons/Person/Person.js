import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from "../../../hoc/withClass";
import Radium from "radium";
import Classes from './Person.module.css';

class Person extends  Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        return (
            <Aux>
                {this.props.isAuth ?<p>Authenticated</p> : <p>Please login</p>}
                <p onClick={this.props.click}>I'm a {this.props.name} and I {this.props.age} yr old</p>
                <p>{this.props.children}</p>
                <input key='i3' ref={this.inputElementRef}  type='text' onChange={this.props.changed} value={this.props.name}/>
                {/*<input key='i3' ref={(inputEl) => {this.inputElement = inputEl}} type='text' onChange={this.props.changed} value={this.props.name}/>*/}
                {/*<input key='i3' ref={(inputEl) => (inputEl)} type='text' onChange={this.props.changed} value={this.props.name}/>*/}
            </Aux>
        );
    }


};
Person.propTypes = {
    click: PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, Classes.Person);