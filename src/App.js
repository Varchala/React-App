import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Sensors from './components/pages/sensor';
import Contact from './components/pages/contact';
import Data from './components/pages/dataComponent/data';
import SoilSensor from './components/pages/dataComponent/soilSensor';
import LevelSensor from './components/pages/dataComponent/levelSensor';
// import SoilSensor from './components/pages/dataComponent/soilSensor';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
class App extends React.Component {
  render(){
  return (
    <BrowserRouter> 
    <div className="App">
      <Header> </Header> 
      <Route exact={true} path='/homepage' component={Homepage}/>
     
         <Route  path='/SoilSensor' component={SoilSensor}/> 
         <Route  path='/LevelSensor' component={LevelSensor}/>
      <Route path='/Sensors' component={Sensors}/>      
      <Route  path='/Contact' component={Contact}/>     
      <Footer/>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
