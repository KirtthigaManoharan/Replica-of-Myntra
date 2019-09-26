import React,{ Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer,MDBView,MDBMask} from "mdbreact";
class carousel extends Component {
    state = {  }
    render() { 
        return (  

<div id="carousel">
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
   <img
     className="d-block w-100"
     src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/9/11/11e4ab66-35cd-4eec-91c2-d980b36b403c1568196562133-Wrogn-Desktop-Main-Banner.jpG"
     alt="First slide"
   />
 <MDBMask overlay="black-light" />
 </MDBView>
</MDBCarouselItem>
<MDBCarouselItem itemId="2">
 <MDBView>
   <img
     className="d-block w-100"
     src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/9/11/d7208038-f329-46af-a02a-983e1bfa296a1568196562082-Desktop-Main-Banner.jpG"
     alt="Second slide"
   />
 <MDBMask overlay="black-strong" />
 </MDBView>
</MDBCarouselItem>
<MDBCarouselItem itemId="3">
 <MDBView>
   <img
     className="d-block w-100"
     src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/9/10/00a7b40d-32a4-4315-a658-99a2cbe98ece1568134611360-desktop-banner.jpG"
     alt="Third slide"
   />
 <MDBMask overlay="black-slight" />
 </MDBView>
</MDBCarouselItem>
</MDBCarouselInner>
</MDBCarousel>
</MDBContainer>
</div>
);
    
        }
}
export default carousel;
