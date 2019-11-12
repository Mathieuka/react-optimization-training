import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

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
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[App.js ] shouldComponentUpdate`);
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

    this.setState((prevState,props) => {
      return { 
        persons: persons, 
        changeCounter: prevState.changeCounter + 1 
      }
    });
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

  loginHandler = () => this.setState( (prevState,props) => ({authenticated: !prevState.authenticated}));

  render () {
    console.log('[App.js] render');
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
                <div>
                  <Persons  persons={this.state.persons} 
                            change={this.nameChangedHandler} 
                            clicked={this.deletePersonHandler}                          
                            />
                </div>        
                )
    }
    

    return (
        <Aux>
          <button onClick={this.toggleCockpit}>display cockpit</button>
          <AuthContext.Provider 
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler
              }}
          >
            { this.state.displayCockpit === true ? 
                <Cockpit 
                  title={this.props.appTitle}
                  personsLength={this.state.persons.length} 
                  click={this.togglePersonsHandler}
                  showPerson={this.state.showPersons}
                  />
            : null}
            {persons}
          </AuthContext.Provider>           
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
