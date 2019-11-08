import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    displayCockpit : true,
    otherState: 'some other value',
    showPersons: false
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[App.js ] shouldComponentUpdate ${nextProps} ${nextState}`);
    return true;
  }
  

  componentDidUpdate(nextProps, nextState){
    console.log('[Apps] componentDidUpdate');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };
    

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  toggleCockpit = () => {
    // this.setState({displayCockpit :!this.state.displayCockpit})
    this.setState((prevState)=>{
      return {
        displayCockpit :!prevState.displayCockpit
      }
    })
  }

  render () {
    console.log('[App.js] render');
    
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
                <div>
                  <Persons  persons={this.state.persons} 
                            change={this.nameChangedHandler} 
                            clicked={this.deletePersonHandler}/>
                </div>        
                )
    }
    

    return (
        <div className={classes.App}>
        <button onClick={this.toggleCockpit}>display cockpit</button>
          { this.state.displayCockpit === true 
          ? 
              <Cockpit 
                title={this.props.appTitle}
                persons={this.state.persons} 
                click={this.togglePersonsHandler}
                showPerson={this.state.showPersons}
                />
          :
          false
          }
          {persons}           
        </div>
    );
  }
}

export default App;
