import React,{Component} from 'react';
import './App.css';
import Personlist from '../Components/Person/PersonList/Personlist';
import Cockpit from '../Components/Cockpit';
import Game from '../Components/Game/game';
import WithClass from '../Hoc/WithClass';
import Aux from '../Hoc/Aux';
import AuthContest from '../Context/AuthContest';


class App extends Component{

  constructor(props){
    super(props);
    console.log("constructor log");
  }

  state={
    persons:[{ id:'10',name:'Ana',age:32},
      {id:'11',name:'Max',age:32},
      {id:'12',name:'Jack',age:22},
      {id:'13',name:'Drake',age:25}],
    shouldShow:false,
    states:['alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','hawaii','idaho',
    'illinoi','indiana','iowa','iansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota',
    'mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey','new mexico','new york','north carolina','north dakota',
    'ohio','oklahoma','oregon','pennsylvania','rhode island','south carolina','south dakota','tennessee','texas','utah',
    'vermont','virginia','washington','west Virginia','wisconsin','wyoming'],
    counter:0,
    autharized:false
  }

  loginhandler=()=>{
    this.setState({autharized: true})
  }

  static getDerivedStateFromProps(state, props){
    console.log('get Derived fron state pros logg');
    return false;
  }
  static shouldComponentUpdate(state,props){
    console.log('shouldComponentUpdate logg');
    return false;
  }

  nameChangefun=(event,id)=>{
        const personindex=this.state.persons.findIndex(p=>{
          return p.id===id;
        })
        const person={...this.state.persons[personindex]};
        person.name=event.target.value;
        const persons=[...this.state.persons];
        persons[personindex]=person;
        this.setState((prevState,props)=>{
        return {persons:persons,counter:prevState.counter+1}})
  }

  deleteName=(index)=>{
    let localperson=[...this.state.persons];
    localperson.splice(index,1)
    this.setState({
      persons:localperson
    })
  }
  
  toggleHandler=()=>{

    this.setState({shouldShow:! this.state.shouldShow})

  }

  componentDidMount(){
    console.log('componentDidMount logg');
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate logg');
    
  }

  
  render(){

    console.log('render logg');


    let newClasses=[];


    if(this.state.persons.length>=4){
      newClasses.push('black');
    }


    if(this.state.persons.length>=2){
      newClasses.push('red');
    }
    let persons;

    if(this.state.shouldShow){
       persons=(
        <div>
           <Personlist persons={this.state.persons} del={this.deleteName} nameChange={this.nameChangefun} />
        </div>
       );
    }
    else{
      persons=null;
    }



    return (
     <Aux>
       <div className='App'>
            <AuthContest.Provider value={{
                authanticated:this.state.autharized,
                login:this.loginhandler}}>
                    <Cockpit newClasses={newClasses} toggle={this.toggleHandler}/>

                    {persons}
            </AuthContest.Provider>
            <Game states={this.state.states} score={this.state.score}></Game>
       </div>
     </Aux>
    );
  }
}

export default WithClass(App, App);