import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'dsbdfsdb',name:'max', age:28},
      {id: 'jdghsgfhsd', name:'demo', age:27},
      {id:'bdvash',name:'test', age:27},
      {id:'sadhasdhj', name:'ttt', age:27},
    ],
     showPerson: false
  }

  nameChangeHandler = (event,id) => {
      const personIndex = this.state.persons.findIndex(p => {
         return p.id === id;
      });
      const person = {
          ...this.state.persons[personIndex]
      };
      person.name = event.target.value.toUpperCase();
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons: persons});
  }
    togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
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
                  {this.state.persons.map((person,index) => {
                      return <Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.nameChangeHandler(event,person.id)} />
                  })}
                  {/*<Person*/}
                  {/*    name={this.state.persons[0].name}*/}
                  {/*    age={this.state.persons[0].age}*/}
                  {/*    click={this.switchNameHandler.bind(this,'Samrat')}>Data</Person>*/}
                  {/*<Person*/}
                  {/*    name={this.state.persons[1].name}*/}
                  {/*    age={this.state.persons[1].age}*/}
                  {/*    changed={this.nameChangeHandle}></Person>*/}
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
