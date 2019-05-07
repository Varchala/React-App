import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './Assets/css/default.min.css';
//import * as ReactBootstrap from 'react-bootstrap';
// import {Card,ListGroup,Tab,Row,Col,Sonnet} from 'react-bootstrap';
// import {
//     BrowserRouter,
//     Route
//   } from 'react-router-dom';
import ChartData from './dataChart';

class SoilSensor extends React.Component {
 
  render(){
   
    return (
      <soilSensor> 
              <div className="soilSensor">
            Hi There! <h1> Soil Sensor Data!</h1>
            <ChartData label='Soil Sensor'/>
            </div>
            </soilSensor>
        );
}
}
export default SoilSensor;
