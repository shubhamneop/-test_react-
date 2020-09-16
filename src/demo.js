import React ,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [personState,setPersonState] = useState({
        persons: [
            {name:'max', age:28},
            {name:'demo', age:27},
        ]
    });

    const switchNameHandler = () => {
        // console.log('CLicked');
        // this.state.persons[0].name = 'shubham';
        setPersonState({ persons: [
                {name:'max', age:28},
                {name:'Shubham', age:27},

            ]});
    };

    return (
        <div className="App">
            <h1>React</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age} >Data</Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age} ></Person>

        </div>
    );
}


export default app;


