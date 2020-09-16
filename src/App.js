import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'max', age:28},
      {name:'demo', age:27},
    ],
     showPerson: false
  }
  switchNameHandler = (newName) => {
      // console.log('CLicked');
      // this.state.persons[0].name = 'shubham';
      this.setState({ persons: [
              {name:newName, age:28},
              {name:'Shubham', age:27},

          ]});
  }

  nameChangeHandle = (event) => {
      this.setState({ persons: [
              {name:'max', age:28},
              {name:event.target.value, age:27},

          ]});
  }
    togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
    }

render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      }
    let persons = null;
      if (this.state.showPerson) {
          persons = (
              <div>
                  <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age}
                      click={this.switchNameHandler.bind(this,'Samrat')}>Data</Person>
                  <Person
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                      changed={this.nameChangeHandle}></Person>
              </div>
          );
      }
  return (
    <div className="App">
      <h1>React</h1>
      <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}


    </div>
  );
  }

}

export default App;
