import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Assets/css/default.min.css';
//import * as ReactBootstrap from 'react-bootstrap';
// import {Card,ListGroup,Tab,Row,Col,Sonnet} from 'react-bootstrap';
// import {
//     BrowserRouter,
//     Route
//   } from 'react-router-dom';
import ChartData from './dataChart';
class LevelSensor extends React.Component {
  
  render(){

    return (
      <levelSensor> 
            <div className="levelSensor">
            Hi There! <h1> Level Sensor Data!</h1>
            <ChartData label='Level Sensor'/>
            </div>
            </levelSensor>
        );
}
}
export default LevelSensor;
