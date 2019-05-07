import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Assets/css/default.min.css';
//import * as ReactBootstrap from 'react-bootstrap';
import {ListGroup,Tab,Row,Col, Card} from 'react-bootstrap';
import SoilSensor from './soilSensor';
import LevelSensor from './levelSensor';
import {
    Link,
    NavLink
  } from 'react-router-dom';
class Data extends React.Component {
  render(){
    
    return (
        <data> 
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
            
        </data>
        );
}
}
export default Data;
