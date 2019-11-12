import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);
    
    console.log(authContext);

    useEffect(()=>{
      toggleButtonRef.current.click()
      console.log('[Cockpit.js] useEffect');
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
    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleButtonRef}
                className={props.showPerson ? classes.Red : ""}
                onClick={props.click}>Toggle Persons
            </button>
              <button onClick={()=>authContext.login()}>login</button>
        </div>
    )
}

export default React.memo(Cockpit);
