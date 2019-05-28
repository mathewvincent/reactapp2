import React from 'react';
import './Game.css';


const game=(props)=>{
    let score=0;
    let localstate=props.states

    let newstate=[];
    
    const checkfun=()=>{
        
        let values=document.getElementById('button').value.toLowerCase();
        let display =true;
        newstate.forEach(newar=>{
            if(newar===values){
                display=false;
            }
        })
          if(display){
          localstate.forEach(sta=> {
            
            
             if(values===sta){
                 score++;
                 console.log('Your Score is '+ score);
                 document.getElementById('scoredisplay').innerHTML='Your current Score is '+ score+'/50';
                 newstate.push(document.getElementById('button').value)
                 console.log(newstate);
                 document.getElementById('button').value='';
            }
            
          });
        }
        else{document.getElementById('scoredisplay').innerHTML='Already submitted';}
        
        
    }
    
    return(

        
        <div className='game'>
            
            <h3>
                Guess the states Game
            </h3>
            <div className='rules'>
            <h4>Rules</h4>
            
            <ul>
                
                <li>No cheating</li>
            </ul>
            </div>
            <br/>
            
            <label>Type all US states </label>
            <input type='text'  id="button"></input>
            <button type='button' onClick={checkfun} value="value" name='form'>Submit</button>
            
            <br/><br/>
            <h2 id="scoredisplay">Your current Score is 0/50</h2>
            <p>{newstate[0]}</p>
        </div>
    )

}

export default game;