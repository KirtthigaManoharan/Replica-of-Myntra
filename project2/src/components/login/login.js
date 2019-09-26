import React, {Component} from 'react';
import '../login/login.css'
import { SocialIcon } from 'react-social-icons';
import Header from '../men/header';
import Signup from '../signup/signup';
import '../men/header.css';
import Footer from '../footer';
import { loginform } from './UserFunction';
import GoogleLogin from 'react-google-login';
class login extends Component {
    constructor(props){
    super(props);
    this.state = { 
        items1 : [],
        isOpen:false,
        isClose:false,
        email : ' ',
        pass : ' '
     };
     this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.name+":"+e.target.value) 
      }    
    handleSubmit(e) {
        e.preventDefault()

      const user = {
        email: this.state.email,
        pass: this.state.pass
      }
      console.log(user);
      fetch('http://localhost:3003/login', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({user:user})
}).then(res => console.log(res));

    }
    componentDidMount(){
        this.getItems1()
      }
      getItems1(){
        fetch('http://localhost:3003/crud')
          .then(response => response.json())
          .then(items1 => this.setState({items1}))
          .catch(err => console.log(err))
      }
    render() { 
      
        return ( 
            <div>
                <Header />
                <br></br><br></br><br></br>
            <div class="register-container">
<div class="register-box">
<div><p class="register-title">Login to Myntra</p></div>
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
<form class="register-register-form" onSubmit={this.handleSubmit.bind(this)}>
<fieldset class="register-input-container">
<div class="register-input-item">
<input type="email" value={this.state.email} onChange={this.onChange} class="register-user-input-email register-user-input" name="email" placeholder="Your Email Address"/></div>
<div class="register-input-item">
<input type="password" value={this.state.pass} onChange={this.onChange} class="register-user-input-password register-user-input" name="pass" placeholder="Your Password"/></div>
<input type="hidden" name="xsrf" value="vwdPA2QJDNA99hgtGLNVxXpNR9Xryd7G" />
</fieldset>

<fieldset class="register-register-button-container">
    <button class="register-register-button" type="submit">LOGIN</button></fieldset></form>
    <div class="login-link-container">
    <a class="login-link">Recover password</a>
    <div class="login-right-links">
    <span class="login-info-text">New to Myntra?</span>
    <a class="login-create-account-link login-link" >
        Create Account
        </a>
    </div></div>
</div>
</div>
<Footer />
</div>
         );
    }
}
 
export default login;