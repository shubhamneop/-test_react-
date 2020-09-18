import React, {useEffect, useRef} from "react";
import Classes from "../Persons/Person/Person.module.css";

const cockpit = props => {
    const assignClasses = [];
    let buttonClass =[Classes.button];
    if (props.showPerson) {
        buttonClass.push(Classes.red)
    }
    if(props.persons.length <=2) {
        assignClasses.push(Classes.red);
    }
    if (props.persons.length <=1) {
        assignClasses.push(Classes.bold);
    }
    return (
        <div>
            <h1>{props.title}</h1>
        <p className={assignClasses.join(' ')}>This is style demo</p>
    <button className={buttonClass.join(' ')}
            onClick={ props.clicked}>Toggle Person</button>
           <button className={Classes.button} onClick={props.login}>Log In</button>
        </div>
    );
}

export default React.memo(cockpit);