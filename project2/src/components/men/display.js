import React, {Component} from 'react';
import axios from 'axios';
import Header from './header';
import Grid from './grid';
import '../men/display.css'
class display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
        }
    }
    componentDidMount(){
        this.getItems();
      }
      getItems(){
        axios.post('http://localhost:3003/getItem', { id: this.props.match.params.id })
          .then(item => {
              this.setState({ item: item.data })
            })
          .catch(err => console.log(err))
      }
     
    render() { 
        // const items = this.state.items.map(item => {
        //     // console.log(item.id, this.props.match.params.id);
        //     if (item.id === parseInt(this.props.match.params.id)) {
        //         return <img src={item.image}/>;
        //     }
        // })
        // console.log(items[0]);
        return ( 
<>
            <div>
            <Header />
            </div>
            <br></br><br></br><br></br><br></br><br></br>
            <div class="row">
            <div class="image-grid-col50">
            <div class="image-grid-imageContainer" >
            <div class="image-grid-image">
             <img src={`/${this.state.item.image }`} />
                </div>
                <div class="image-grid-skeletonLoader">
                </div>
                </div>
                </div>
            <div class="sidecolumn">
                <div class="pdp-description-container">
             <div class="pdp-price-info">
             <h1 class="pdp-title">{`${this.state.item.brand }`} </h1>
             <h1 class="pdp-name pdp-bb1">{`${this.state.item.pname }`} </h1>
             <hr></hr>
            <p class="pdp-discount-container">
            <div class="pdp-mrp-verbiage" tabindex="0">
             <span class="pdp-price" tabindex="0">
                 <strong> {`${this.state.item.price }`} </strong></span> &nbsp;&nbsp;&nbsp;
                <span class="pdp-mrp"><s>Rs. {`${this.state.item.oprice }`} </s></span> &nbsp;&nbsp;&nbsp;
                 <span class="pdp-discount">(60% OFF)</span></div></p>
                 <p class="pdp-selling-price">
                 <span class="pdp-vatInfo">Additional tax shall apply, charged at checkout</span>
                 </p></div>
                <hr></hr>
                 <div class="size-buttons-size-container" id="sizeButtonsContainer">
                     <div class="size-buttons-size-header">
                         <h4 class="size-buttons-select-size">SELECT SIZE</h4> &nbsp;&nbsp;&nbsp;
                         <span class="size-buttons-size-chart">
                        <button class="size-buttons-show-size-chart">Size Chart</button>
                        <span class="size-buttons-arrow"></span></span>
                        </div>
                        <br></br>
                        <div class="size-buttons-size-buttons">
                        <div class="size-buttons-tipAndBtnContainer">
                        <span class="size-buttons-buttonContainer">
                        <button class="size-buttons-size-button size-buttons-size-button-default">
                        <span class="size-buttons-size-strike-hide"></span>
                        <p class="size-buttons-unified-size">36</p>
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button class="size-buttons-size-button size-buttons-size-button-default">
                        <span class="size-buttons-size-strike-hide"></span>
                        <p class="size-buttons-unified-size">37</p>
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button class="size-buttons-size-button size-buttons-size-button-default">
                        <span class="size-buttons-size-strike-hide"></span>
                        <p class="size-buttons-unified-size">38</p>
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button class="size-buttons-size-button size-buttons-size-button-default">
                        <span class="size-buttons-size-strike-hide"></span>
                        <p class="size-buttons-unified-size">39</p>
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button class="size-buttons-size-button size-buttons-size-button-default">
                        <span class="size-buttons-size-strike-hide"></span>
                        <p class="size-buttons-unified-size">40</p>
                        </button>
                        </span>
                     </div></div></div>
                        <br></br>
                     <div class="">
                         <div class="pdp-action-container pdp-fixed">
                             <div class="pdp-add-to-bag pdp-button pdp-flex pdp-center">
                        <span class="myntraweb-sprite pdp-whiteBag sprites-whiteBag pdp-flex pdp-center"></span>
                        ADD TO BAG</div> &nbsp;&nbsp;&nbsp;
                        <div class=" pdp-add-to-wishlist pdp-button pdp-add-to-wishlist pdp-button pdp-flex pdp-center">
                        <span class="myntraweb-sprite pdp-darkWishlistIcon sprites-darkWishlist pdp-flex pdp-center ">
                        </span><span class="">WISHLIST</span></div></div></div>

                    </div>
                    </div>
                    </div>
                    </>
         );
    
}
}
export default display;