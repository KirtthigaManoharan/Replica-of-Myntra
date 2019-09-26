import React, {Component} from 'react';
import '../signup/signup.css';
import { SocialIcon } from 'react-social-icons';
import Header from '../men/header';
import '../men/header.css';
import Footer from '../footer';
class signup extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <br></br><br></br><br></br>
<div class="register-container">
<div class="register-box">
<div><p class="register-title">Signup with Myntra</p></div>
<div class="register-third-party-register">
<p class="register-button-info-text register-info-text">EASILY USING</p>
<div class="register-button-container">
<button class="register-facebook register-button">
<span class="register-fb-logo register-sprite"><SocialIcon network="facebook" style={{ height: 50, width: 30 }} /></span>FACEBOOK</button>
&nbsp;&nbsp;&nbsp;
<button class="register-google register-button" id="gPlusLogin">
<span class="register-gplus-logo register-sprite"><SocialIcon network="google" style={{ height: 50, width: 30 }} /></span>GOOGLE</button>
</div>
</div>
<p class="register-button-info-text register-info-text">- OR USING EMAIL -</p>
<form method="POST" class="register-register-form" novalidate="">
<fieldset class="register-input-container">
<div class="register-input-item">
<input type="email" class="register-user-input-email register-user-input" name="email" placeholder="Your Email Address"/></div>
<div class="register-input-item">
<input type="password" class="register-user-input-password register-user-input" name="password" placeholder="Choose Password"/></div>
<div class="register-input-item">
    <input type="number" min="1000000000" max="9999999999" class="register-user-input-mobile register-user-input" name="mobile" placeholder="Mobile Number (For order status updates)"/>

    </div>
<input type="hidden" name="xsrf" value="vwdPA2QJDNA99hgtGLNVxXpNR9Xryd7G" />
<fieldset data-type="horizontal" class="register-gender">
    <legend class="register-gender-title">I'm a</legend>
<input type="radio" class="register-gender-radio" id="male" name="gender" value="male"/>
    <label class="register-gender-label" for="male">Male</label>
    <input type="radio" class="register-gender-radio" id="female" name="gender" value="female"/>
    <label class="register-gender-label" for="female">Female</label>
</fieldset>
</fieldset>

<fieldset class="register-register-button-container">
    <button class="register-register-button">REGISTER</button></fieldset></form>
<div class="register-link-container">
    <div class="register-login-link">
        <span class="register-info-text">Already have an account?</span>
<a class="register-create-account-link register-link" href="/login?referer=https://www.myntra.com/men-formal-shirts">Login!</a>
</div>
</div>
</div>
</div>
<Footer />
</div>
);
    }
}
 
export default signup ;