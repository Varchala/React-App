import React from 'react';
//import './Assets/css/default.min.css';

class Sensors extends React.Component {
  render(){
    return (
      <sensor>
        <div className="sensor"> 
         <h1>Devices in the Network</h1>
           <ol>
               <li>Soil sensor</li>
               <li>Level Sensor</li>
               <li>IR Sensor</li>

           </ol>

           </div>
           </sensor>
        );
}
}
export default Sensors;
