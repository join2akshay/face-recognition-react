import React,{Component} from 'react';
import Navigation from './component/Navigator/Navigation';
import Logo from './component/Logo/Logo';
import ImageFrom from './component/ImageFrom/ImageFrom';
import Rank from './component/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import config from './config';
import FaceReco from './component/FaceReco/FaceReco';
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
      input:'',
      imgURL:''

    }
  }
 onInputChange=(event)=>{
   
   this.setState({input:event.target.value});
  
 };
 onButtonSubmit=()=>{
  console.log(this.state.input);
   this.setState({imgURL:this.state.input});
   console.log(this.state.imgURL);
  app.models.initModel({id: Clarifai.FACE_DETECT_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.state.imgURL);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts'];
        console.log(concepts);
      })
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
    <FaceReco imageURL={this.state.imgURL}/>
    </div>
  );
 }
 
}

export default App;
