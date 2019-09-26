import React, {Component} from 'react';
import './footer.css';
class footer extends Component {
    state = {  }
    render() { 
        return ( 
<div className="footer1">
<div className="container">
  <div className="row">
  <div className="desktop-shopLinks">
    <ul><strong>
      ONLINE SHOPPING</strong>
      <br></br><br></br>
    <li>Men</li>
    <li>Women</li>
    <li>Kids</li>
    <li>Home & Living</li>
    <li>Discover</li>
    <li>Gift Cards</li>
    <li>Myntra Insider<span className="desktop-superscript">New</span></li>
    </ul>
  </div>

  <div className="desktop-usefulLinks">
   <ul><strong>
     USEFUL LINKS</strong>
     <br></br><br></br>
     <li>Contact Us</li>
     <li>FAQ</li>
     <li>T&C</li>
     <li>Terms Of Use</li>
     <li>Track Order</li>
     <li>Shipping</li>
     <li>Cancellation</li>
     <li>Returns</li>
     <li>Whitehat</li>
     <li>Blog</li>
     <li>Careers</li>
   </ul>
</div>

   <div className="desktop-appExperience">
<p className="desktop-gInfoTitle"> <strong>EXPERIENCE MYNTRA APP ON MOBILE </strong></p>

<div className="desktop-downLinkContainer">
<a href="https://335741.measurementapi.com/serve?action=click&amp;publisher_id=335741&amp;site_id=128503&amp;invoke_id=282383&amp;my_campaign=Organic&amp;my_publisher=Other%20Organic&amp;my_adgroup=Myntra%20Brand&amp;my_ad=0&amp;site_id_android=128503&amp;site_id_ios=128517">
  <img className="desktop-androidDownLink" src="https://assets.myntassets.com/assets/images/retaillabs/2018/10/16/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"/></a>

<a href="https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059">
  <img className="desktop-iOSDownLink" src="https://assets.myntassets.com/assets/images/retaillabs/2018/10/16/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"/></a>
</div>

{/* links has to be added */}
   </div>
   <div className="desktop-promises">
<div className="desktop-section">
<div className="myntraweb-footer-sprite desktop-original sprites-original"></div>
<div><strong>100% ORIGINAL </strong>guarantee for all products at myntra.com 
</div>
</div>

<div className="desktop-section">
<div className="myntraweb-footer-sprite desktop-return sprites-return"></div>
<div><strong>Return within 30days </strong>of receiving your order
</div>
</div>

<div className="desktop-section">
<div className="myntraweb-footer-sprite desktop-delivery sprites-delivery"></div>
<div><strong>Get free delivery </strong>for every order above Rs.1199</div>
</div></div>

   </div> 
   </div>
   </div>
        )
    };
}
export default footer;