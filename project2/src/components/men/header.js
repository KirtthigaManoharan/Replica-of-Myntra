import React, {Component} from 'react';
import Cart from '../cart/cart';
import Profile from '../profile';
import Signup from '../signup/signup';
import Login from '../login/login';
// import {NavLink }from 'react-router-dom';
import './header.css';
import 'font-awesome/css/font-awesome.min.css';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
          
            <div className="fixed-top" style={{zIndex:"3" , paddingBottom:"25px"}}>
      <header className="desktop-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="topnav"> 
      <img src="myntra-logo.png" style={{float:"left", height:"40px" , width:"80px"}}/>
     
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    
      <li className="nav-item1">
      {/* <Link to={'/'} className="nav-link" id ="mystyle">MEN</Link> */}
      <a className="nav-link" href="#">MEN</a>
      </li>
      <li className="nav-item2">
        <a className="nav-link" href="#">WOMEN</a>
      </li>
      <li className="nav-item3">
        <a className="nav-link" href="#">KIDS</a>
      </li>
      <li className="nav-item4">
        <a className="nav-link" href="#">HOME AND LIVING</a>
      </li>
      <li className="nav-item5">
        <a className="nav-link" href="#">NEW ARRIVALS</a>
      </li>
      <li className="nav-item5">
        <a className="nav-link" href="#">DISCOVER</a>
      </li>
<li>


       <div className="form-group col-lg-4 search">
            <div className="form-group has-feedback">
                <input type="text" className="form-control" id="inputValidation" style={{width:"300px" }}/>
                <span className="glyphicon glyphicon-search form-control-feedback" id="search"></span>
            </div>
        </div>
        
  
</li>
<li className="nav-item5" style={{position:"relative", margin:"0 3px" }}>
 <i className="fa fa-user" style={{position:"relative", right:"40px", top:"10px" }}></i>
        <a className="nav-link" href="<Profile />" style={{position:"relative", top:"10px"}}>
          </a>
  
      </li>
      <li className="nav-item5" style={{position:"relative", right:"20px", margin:"0 3px" }}>
      <i className="fa fa-bookmark" style={{position:"relative", right:"40px", top:"10px" }}></i>
        <a className="nav-link" href="#" style={{position:"relative", top:"10px" }}>Wishlist</a>
      </li>
      <li className="nav-item5"style={{position:"relative", right:"30px",  margin:"0 3px" }} >
      <i className="fa fa-shopping-bag" style={{position:"relative", right:"40px", top:"10px" }}></i>
        <a className="nav-link" href="<Cart />" style={{position:"relative", top:"10px",right:"5px" }}>Bag</a>
      </li>
</ul>

       </div>
      </nav>
      </header>
      </div>
         );
    }
}
 
export default Header;