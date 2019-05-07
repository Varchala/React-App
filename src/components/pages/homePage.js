import React from 'react';
//import './Assets/css/default.min.css';
import SoilSensor from './dataComponent/soilSensor';
import LevelSensor from './dataComponent/levelSensor';
import Data from './dataComponent/data';
import {Route,BrowserRouter} from 'react-router-dom';
import {
  Link,
  NavLink
} from 'react-router-dom';
import {ListGroup,Tab,Row,Col, Card} from 'react-bootstrap';
class Homepage extends React.Component {
  render(){
    return (
        <homepage>
        <div className="homepage"> 
         <h1>Motivation</h1>
         Welcome to the world of IoT.
         We have built this dashboard to get a hands on fullStack.
         Our thug Life at IT Company finally results in something better.
         Basically, the website is built on React and the Node server.
         We have used MQTT to communicate to the Sensors on the Arduino Uno Board.
         The sensors store the data onto the cloud and we are creating visualization of the data to make it look cool! All like graphs and stuff gives it a charm you see!
         The write up is to make content for the page. Chuck it!
         <div className="data">
                <Row>
                    <Col sm={4}>
                    <Card> 
                    <Card.Header> Online Devices
                        </Card.Header>
                    <ListGroup>
                        <ListGroup.Item>
                           
                        <NavLink to="/SoilSensor">Soil Sensor</NavLink> 
                          
                        </ListGroup.Item>
                    
                        <ListGroup.Item>
                        <Link to="/LevelSensor">Level Sensor</Link>
            
                       
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                    </Col>
                </Row>
            </div>
        </div>
        </homepage>
        );
}
}
export default Homepage;
