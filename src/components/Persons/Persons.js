import React, {Component} from 'react'
import Person from '../Persons/Person/Person';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, " ", this.props.persons);
        if(nextProps.persons !== this.props.persons){
            console.log('[Persons] shouldComponentUpdate TRUE');
            return true
        }else{
            console.log('[Persons] shouldComponentUpdate FALSE');
            return false
        }
    }

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
            this.props.persons.map( ( person, index ) => {
                return <Person
                  click={() => this.props.clicked( index )}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={( event ) => this.props.change( event, person.id )}/> 
              }
            )
        )
    }
}

export default Persons;
