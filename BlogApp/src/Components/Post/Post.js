import React from 'react';
import './Post.css';

const post =(props)=>{
    return(
        <article className='post' onClick={props.clicked} >
            <h3>{props.title}</h3>
            <div>
                Mathew Vincent
            </div>
       </article>
    )
}

export default post;