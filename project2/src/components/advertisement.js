import React,{ Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer,MDBView} from "mdbreact";
class advertisement extends Component {
    state = {  }
    render() { 
        return ( 
<div className="advertisement-carousel">
<MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
   <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/6/27/82d6656a-d104-455a-8c3b-e6ad4cf5410d1561619250929-Mobiwiki.jpg" height="80px"/>
   </MDBView>
   </MDBCarouselItem>
   </MDBCarouselInner>

   <MDBCarouselInner>
        <MDBCarouselItem itemId="2">
          <MDBView>
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/26/96a641be-a42f-4919-bacf-9d84ec173e091553594813424-Desktop_02_02--1-.jpg" height="100px"/>
   </MDBView>
   </MDBCarouselItem>
   </MDBCarouselInner>

   <MDBCarouselInner>
        <MDBCarouselItem itemId="3">
          <MDBView>
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/9/10/e86c56af-727a-48ef-a2e9-cd192016c1fe1568114592358-Desktop.jpg" height="100px"/>
   </MDBView>
   </MDBCarouselItem>
   </MDBCarouselInner>
   </MDBCarousel>
   </MDBContainer>
</div>
 );
}
}

export default advertisement;