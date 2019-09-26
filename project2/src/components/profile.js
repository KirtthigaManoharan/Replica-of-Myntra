import React, {Component} from 'react';
import Signup from './signup/signup';
import Login from './login/login';
import './profile.css';
import {NavLink }from 'react-router-dom';
class profile extends Component {
    state = {  }
    render() { 
        return (  
            <div>
<div class="desktop-userIconsContainer" >
</div>
{/* <div class="desktop-userActions"> */}
    {/* <div class="desktop-userActionsArrow"></div> */}
        {/* <div class="desktop-userActionsContent"> */}
            <div class="desktop-contentInfo">
                <div class="desktop-infoTitle"><b>Welcome</b></div>
                    <div class="desktop-infoEmail" >To access account and manage orders</div>
</div>
<br></br>
<div>
    <div class="desktop-getUserInLinks desktop-getInLinks" >
    <NavLink to="/signup">
        Sign up
        </NavLink> &nbsp;&nbsp;&nbsp;

   <NavLink to="/login">
   Login
   </NavLink>
</div>


<div class="desktop-getInLinks">
<a href="/my/orders" data-track="coupons" class="desktop-info">
<div class="desktop-infoSection">Orders</div>
</a>
<a href="/wishlist" data-track="coupons" class="desktop-info">
    <div class="desktop-infoSection">Wishlist</div></a>
    <a href="/giftcard" data-track="coupons" class="desktop-info">
        <div class="desktop-infoSection">Gift Cards</div></a>
        <a href="/contactus" data-track="coupons" class="desktop-info">
            <div class="desktop-infoSection">Contact Us</div></a>
            <a href="/myntrainsider?cache=false" data-track="coupons" class="desktop-info">
          <div class="desktop-infoSection">Myntra Insider
                <span class="desktop-superscriptTag"> New </span></div></a></div>
                
            </div>
            {/* </div> */}
            {/* </div> */}
            </div>
            );
        }
    }
     
    export default profile ;