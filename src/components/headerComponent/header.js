import React from 'react';
//import './Assets/css/default.min.css';
import {Navbar} from 'react-bootstrap';
import{
    Link
} from 'react-router-dom';
class Header extends React.Component {
  render(){
    return (
        <header> 

            <div className="Logo"> 
            Thinkspace Labs
            </div>
            <nav>
                <ul> 
                    <li className="first"> 
                        <Link to="/Homepage">HomePage</Link>
                    </li>
                    <li> 
                        <Link to="/Sensors">My Devices</Link>
                    </li>
                    <li className="last"> 
                     <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </header>
        );
}
}
export default Header;
