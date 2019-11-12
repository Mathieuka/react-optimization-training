import React,{Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        if(this.props.indexOfThePerson === this.props.arrayLength - 1){
            this.inputElementRef.current.focus()
        }
    }

    render(){
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                    index
                    arrayLength
                    ref={this.inputElementRef}
                />
            </Aux>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export default withClass(Person, classes.Person);
