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
import Signin from './component/Singin/Signin';
import Signup from './component/Signup/Signup';
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
      imgURL:'',
      box:{},
      route:'Signin',
      isSigned:false,
      user:{
        id:'',
    name:'',
    entries:0,
    joined:''
      }
    }
  }
  loadUser=(data)=>{
    this.setState({user:{
      id:data.id,
  name:data.name,
  entries:data.entries,
  joined:data.joined
    }})
  };
 

  calculateFace=(data)=>{
const faceData=data.outputs[0].data.regions[0].region_info.bounding_box;
const image=document.getElementById('FaceReco');
const width=Number(image.width);
const height=Number(image.height);
console.log(width,height);
console.log(faceData);
return{
  leftCol:faceData.left_col*width,
  topRow:faceData.top_row*height,
  rightCol:width-(faceData.right_col * width),
  bottomRow:height-(faceData.bottom_row*height)
}

  };
  displayfaceBox=(box)=>{
    console.log(box);
    this.setState({box:box});
  }

 onInputChange=(event)=>{
   
   this.setState({input:event.target.value});
  
 };
 onButtonSubmit=()=>{
 
   this.setState({imgURL:this.state.input});
     app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input).then(response=>this.displayfaceBox(this.calculateFace(response))).catch(err=>console.log(err));

 };
 onRouteChange=(route)=>
 {
   if(this.state.route==='signin')
   {
     this.setState({isSigned:false});
   }
   else if(this.state.route==='home')
   {
    this.setState({isSigned:true});
   }
   this.setState({route:route})
 }
 render(){
  return (
    
    <div className="App">

     <Particles className='particle'
                params={particleValue} />
              
    <Navigation isSigned={this.state.isSigned} onRouteChange={this.onRouteChange}/>
    {
      this.state.route ==='home'?
      <div>
    <Logo/>
    <Rank/>
    <ImageFrom onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
    <FaceReco box={this.state.box} imageURL={this.state.imgURL}/>
    </div>
     :(this.state.route==='Signin'?<Signin onRouteChange={this.onRouteChange}/>:<Signup onRouteChange={this.onRouteChange}/>)
    }
    </div>
  );
 }
 
}

export default App;
