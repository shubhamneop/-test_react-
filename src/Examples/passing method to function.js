import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name:'max', age:28},
            {name:'demo', age:27},

        ]
    }
    switchNameHandler = (newName) => {
        // console.log('CLicked');
        // this.state.persons[0].name = 'shubham';
        this.setState({ persons: [
                {name:newName, age:28},
                {name:'Shubham', age:27},

            ]});
    }
//use bind to pass value to function
    render() {
        return (
            <div className="App">
                <h1>React</h1>
                <button onClick={() => this.switchNameHandler('Shubham!!')}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this,'Samrat')}>Data</Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age} ></Person>

            </div>
        );
    }

}

export default App;
