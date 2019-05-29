import React,{Component} from 'react';
import axios from 'axios';

class fullpost extends Component{
    state={post:null

    }

    componentDidUpdate(){
        axios.get('https://jsonplaceholder.typicode.com/post/'+this.props.selid).then(Response=>this.setState({post:Response.data}))
    }

    render(){
     return(
        <div>
            <article>
                <h1>{this.state.post.title}</h1>
                <h4></h4>
                <p></p>
            </article>
            <button>Delete</button>
        </div>
     )
    }
}

export default fullpost;