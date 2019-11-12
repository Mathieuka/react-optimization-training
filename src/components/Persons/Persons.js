import React, {PureComponent} from 'react'
import Person from '../Persons/Person/Person';

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class Persons extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps, " ", this.props.persons);
    //     if(nextProps.persons !== this.props.persons){
    //         console.log('[Persons] shouldComponentUpdate TRUE');
    //         return true
    //     }else{
    //         console.log('[Persons] shouldComponentUpdate FALSE');
    //         return false
    //     }
    // }

    // getSnapshotBeforeUpdate(snapshot){
    //     console.log('[Persons.js] getSnapshotBeforeUpdate');
    //     return snapshot;
    // }

    // componentDidUpdate(prevProps, prevState, snapshot){
    //     console.log('[Persons.js] componentDidUpdate ',snapshot);
    // }

    // componentWillUnmount(){
    //     console.log('[Persons.js] componentWillUnmount');
    // }

    render(){
        console.log('[Persons.js] rendering...');
        return (
            this.props.persons.map(( person, index, arr ) => {
                return (
                    <ErrorBoundary  key={person.id}> 
                        <Person
                        click={() => this.props.clicked( index )}
                        name={person.name}
                        age={person.age}
                        arrayLength={arr.length}
                        indexOfThePerson={index}
                        changed={( event ) => this.props.change( event, person.id )}
                        />
                  </ErrorBoundary>
                  )
              }
            )
        )
    }
}

export default Persons;
