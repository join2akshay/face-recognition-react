import React,{Component} from 'react';
import Navigation from './component/Navigator/Navigation';
import Logo from './component/Logo/Logo';
import ImageFrom from './component/ImageFrom/ImageFrom';
import Rank from './component/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import config from './config';
import './App.css';
const app = new Clarifai.App({
  apiKey: config.MY_KEY
 });
 
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
  app.models.predict("e0be3b9d6a454f0493ac3a30784001ff", "https://samples.clarifai.com/apparel.jpeg").then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
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
