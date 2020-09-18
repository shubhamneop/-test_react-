import React ,{ Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Radium from 'radium';
import Person from '../Components/Persons/Person/Person';
import Classes from '../Components/Persons/Person/Person.module.css';
import Persons from "../Components/Persons/Persons";
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App.js constructor');
    }
  state = {
    persons: [
      {id: 'dsbdfsdb',name:'max', age:28},
      {id: 'jdghsgfhsd', name:'demo', age:27},
      {id:'bdvash',name:'test', age:27},
      {id:'sadhasdhj', name:'ttt', age:27},
    ],
     showPerson: false,
     changedCounter: 0,
  }

  static getDerivedStateFromProps(props,state) {
        console.log('App js getderived', props);
        return state;
  }
  componentDidMount() {
        console.log('mount');
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

      this.setState((pervState,props) =>{
          return {
              persons: persons,
              changedCounter: pervState.changedCounter + 1
          };
      });
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
        console.log('app js render');
      // const style = {
      //
      // }
    let persons = null;
      if (this.state.showPerson) {
          persons =
                  <Persons
                      persons = {this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangeHandler} />
                  {/*<Person*/}
                  {/*    name={this.state.persons[0].name}*/}
                  {/*    age={this.state.persons[0].age}*/}
                  {/*    click={this.switchNameHandler.bind(this,'Samrat')}>Data</Person>*/}
                  {/*<Person*/}
                  {/*    name={this.state.persons[1].name}*/}
                  {/*    age={this.state.persons[1].age}*/}
                  {/*    changed={this.nameChangeHandle}></Person>*/}
      }

  return (
    <Aux>
      <Cockpit
          title ={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
      />
        {persons}


    </Aux>
  );
  }

}

export default withClass(App,Classes.App);
