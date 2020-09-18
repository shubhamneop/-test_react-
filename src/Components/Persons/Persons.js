import React , { Component}from "react";
import Person from "./Person/Person";
class  Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons js showcomponetudAT');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons js get snapshot');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('person js update');
        return true;
    }

    render() {
    return  this.props.persons.map((person,index) => {
         return ( <Person
             click={() => this.props.clicked(index)}
             name={person.name}
             age={person.age}
             key={person.id}
             changed={(event) => this.props.changed(event,person.id)}
             isAuth={this.props.isAuthenticated}/>
         );
     });
 }
}

export default Persons;