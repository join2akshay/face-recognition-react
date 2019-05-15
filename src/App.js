import React,{Component} from 'react';
import Navigation from './component/Navigator/Navigation';
import Logo from './component/Logo/Logo';
import ImageFrom from './component/ImageFrom/ImageFrom';
import Rank from './component/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
const particleValue={
  particles: {
    number:{
      value:150,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input:''

    }
  }
 onInputChange=(event)=>{
   console.log(event.target.value);
 };
 onButtonSubmit=()=>{
   console.log('I\'m Clicked');
 };
 render(){
  return (
    <div className="App">
     <Particles className='particle'
                params={particleValue} />
    <Navigation/>
    <Logo/>
    <Rank/>
    <ImageFrom onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
    </div>
  );
 }
 
}

export default App;
