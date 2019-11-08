import React, {useState, useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
          alert("data fetched");
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    },[])

    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] 2nd cleanup work in useEffect');
      }
    },)

    const assignedClasses = [];
    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={props.showPerson ? classes.Red : ""}
                onClick={props.click}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit
