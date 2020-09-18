import React from "react";
import WithClass from "../../hoc/withClass";
import Classes from "../Persons/Person/Person.module.css";

const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;


<WithClass classes={Classes.App}>
