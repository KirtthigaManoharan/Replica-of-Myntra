import React, {Component} from 'react';
import Carousel from '../carousel';
import Deal from '../deal';
import Advertisement from '../advertisement';
import Brand from '../brand';
import Trends from '../fav-trend';
import Style from '../style';
import Footer from '../footer';
// import Profile from './components/profile'
// import Signup from './components/signup/signup';
import "bootstrap/dist/css/bootstrap.css";


class home extends Component {
  state = {  
  
  }
  render() {
    return ( 
      <div className="website">
     <br></br><br></br><br></br>
      <Carousel />
     <br></br><br></br>
       <Deal />
      <Advertisement />
      <Brand />
      <Trends />
      <Style />
    <br></br><br></br>
      <Footer />
      {/* <Profile /> */}
      {/* <Signup /> */}
</div>
     );
  }
}

export default home;
