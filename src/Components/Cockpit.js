import React from 'react';
import './Cockpit.css';
// import Radium from 'radium';
import AuthContest from '../Context/AuthContest';

const cockpit = props => {

    // useEffect(() => {
    //     //console.log('cockpit js useeffect logg');
    //     // useReference.current.click();

    //      return() => {
    //          console.log('hgvgvv');
    //     };

    // },[]);

    const style={
        backgroundColor:'gray',
        border:'2px',
        textAlign:'center',
        ':hover':{
            backgroundColor:'black',
            color:'gray'
    
        }
        
      }
    // const useReference = useRef(null);
     

    return (
    <div className="cockpit">
        <h1 style={style}  className={props.newClasses.join(' ')}>Hello  <br/>Welcome To my WEB Page</h1>
        <br/>
        <button  onClick={props.toggle} className='button'>Toggle</button>
        <AuthContest.Consumer>
            {
                contest=> <button onClick={contest.login}>Login</button>
            }
        </AuthContest.Consumer>
    </div>
);
};


export default cockpit;