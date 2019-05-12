import React from 'react';
import Navigation from './component/Navigator/Navigation';
import Logo from './component/Logo/Logo';
import ImageFrom from './component/ImageFrom/ImageFrom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Logo/>
    <ImageFrom/>
    </div>
  );
}

export default App;
