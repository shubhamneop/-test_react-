import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
      username: 'supermax',
  }

  userNameChangeHandler = (event) => {
      this.setState({username:event.target.value});
  }

render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      }
  return (
    <div className="App">
      <h1>React</h1>
        <UserInput changed={this.userNameChangeHandler}
                   currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='ddd'/>

    </div>
  );
  }

}

export default App;
