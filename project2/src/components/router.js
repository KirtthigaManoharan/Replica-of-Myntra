import React, {Component} from 'react';
import { BrowserRouter, Route ,NavLink } from 'react-router-dom';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Men from './men/men';
import Home from './home/home';
import Cart from './cart/cart';
import Profile from './profile';
import Signup from './signup/signup';
import Login from './login/login';
import Display from './men/display';
import '../App.css';
class rout extends Component {
    state = { }

    render() { 
        return ( 
            <BrowserRouter>
            <div className="fixed-top" style={{zIndex:"3" , paddingBottom:"25px"}}>
      <header className="desktop-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="topnav"> 
      
     <NavLink to="/home"><img src="myntra-logo.png" style={{float:"left", height:"40px" , width:"80px"}}/></NavLink>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    
      <li className="nav-item1">
      <NavLink to="/men">MEN</NavLink>
      {/* <a className="nav-link" href="#">MEN</a> */}
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
<i className="fa fa-user" style={{position:"relative", right:"47px", top:"10px" }}></i>
        <a className="nav-link" id="container" style={{position:"relative", top:"10px"}} >
        <div class="dropdown">
        <NavLink to='/profile' className="dropbtn">Profile</NavLink>
        <div class="dropdown-content">
          <div><Profile /></div>
        </div>
        </div> 
        </a>
      </li>
      <li className="nav-item5" style={{position:"relative", right:"20px", margin:"0 3px" }}>
      <i className="fa fa-bookmark" style={{position:"relative", right:"52px", top:"10px" }}></i>
        <a className="nav-link" href="#" style={{position:"relative", top:"10px" }}>
        <NavLink to='/wishlist'>Wishlist</NavLink></a>
      </li>
      <li className="nav-item5"style={{position:"relative", right:"30px",  margin:"0 3px" }} >
      <i className="fa fa-shopping-bag" style={{position:"relative", right:"50px", top:"10px" }}></i>
        <a className="nav-link" href="#" style={{position:"relative", top:"10px",right:"5px" }} >
        <NavLink to='/cart'>Bag</NavLink></a>
      </li>
</ul>


       </div>
      </nav>
      </header>
      </div>
          <div className="content">
            <Route path="/home" component={Home}/>
            <Route path="/men" component={Men}/>
            <Route exact path="/cart" component={Cart}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          <Route exact path="/display" component={Display}/> 
        <Route exact path="/display/:id" component={Display} /> 
        <Route exact path="/cart/:id" component={Cart}/>
          </div>
            </BrowserRouter>
         );
    }
}
 
export default rout;    