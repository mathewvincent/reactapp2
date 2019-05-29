import React,{Component} from 'react';
import './App.css';
import Post from '../Components/Post/Post';
import FullPost from '../Components/FullPost/FullPost';
import axios from 'axios';


class App extends Component{
  state={
  post:[],
  selectedpost:null
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(Response=>this.setState({post:Response.data.slice(0,4)}))

  }
  posthandler(id){
    this.setState({selectedpost:this.state.post[id]})
  }

  render(){

    const post=this.state.post.map(arg=>{
    return <Post title={arg.title} key={arg.id} clicked={()=>this.posthandler(arg.id)}/>})

    return (
      <div className="App">
        <section>
          {post}
        </section>
        <section>
          <FullPost/>
        </section>
      </div>
    );
  }
}

export default App;
