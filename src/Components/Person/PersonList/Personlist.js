import React from 'react';
import Person from '../Person/Person';
import ErrorBoundry from '../../../ErrorBoundry/ErrorBoundry';


const personList=(props)=> {
        console.log('child render log');
        return props.persons.map((person,index)=>{
          return <ErrorBoundry key={person.id}><Person 
        name={person.name} 
        value={person.name}
        change={(event) =>props.nameChange(event,person.id)} 
        delete={()=>props.del(index)}/></ErrorBoundry>
        
        })
}

export default personList;