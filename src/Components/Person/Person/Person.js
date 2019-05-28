import React,{Fragment} from 'react';
import Aux from '../../../Hoc/Aux';
// import WithClass from '../../../Hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../Context/AuthContest';

class Person extends React.Component{
// const person=(prop)=>{

    //An error

    // let er=Math.random();
    // if(er<0.01){
    //     throw new Error("This is a hard coded error. Its chance is 1%");
    // }
    // constructor(props){
    //   super(props);
    //   this.inputElementref=React.createRef();

    // }

    // componentDidMount(){
    //   // this.inputElement.focus();
    //   this.inputElementref.current.focus();
    // }


    render(){
    
      return (
        <Fragment>
        <Aux>
          <AuthContext.Consumer >
            {contest=>contest.authanticated?<p>You are logged inn</p>:<p>Please login</p>}
          </AuthContext.Consumer>
          <p onClick={this.props.delete}>#{Math.floor(Math.random()*100)} Hello {this.props.name}</p>
          <input type='text'
           value={this.props.value} 
           onChange={this.props.change} 
          //  ref={(inputElement)=> this.inputElement=inputElement}
          ref={this.inputElementref}
          ></input>
        </Aux>
        </Fragment>)
    }
};

Person.propTypes= {
  delete:PropTypes.func,
  name:PropTypes.string
}


export default Person;
