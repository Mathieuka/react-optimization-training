import React,{Component} from 'react';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClasse from '../../../hoc/WithClass';

class Person extends Component {
    

    render(){
        console.log('[Person.js] rendering...');
        return (
            // <div className={classes.Person}>
            <WithClasse classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </WithClasse>
            // </div>
        )
    }
    
};

export default Person;