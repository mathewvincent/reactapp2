import React,{Component} from 'react';


class ErrorBoundry extends Component{
     state={
       HasError:false,
       msg:''
     }

    componentDidCatch=(error, info)=>{
        this.setState({
            HasError:true,
            msg: error
        }
        );
    }
    

    render(){
      if(this.state.HasError){
        return <h3>Some error happened, check console</h3>
      }
      else{
          return this.props.children;
      }
    }
}

export default ErrorBoundry;