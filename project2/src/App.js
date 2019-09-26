import React, {Component} from 'react';
import Rout from './components/router';
import Display from './components/men/display';
import Profile from "./components/profile";
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Cart from './components/cart/cart';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


class Project extends Component {
  state = {  
  
  }
  
  render() {
    return ( 
      <div className="website">
       <Rout />
      </div>
     );
  }
}

export default Project;
