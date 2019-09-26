import React, {Component} from 'react';
import PaymentIcon from 'react-payment-icons';
import axios from 'axios';
import Glyphicon from 'react-bootstrap'
import Men from '../men/men';
import '../cart/cart.css';
class cart extends Component {
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
        return ( 
            <div>
                <br></br><br></br><br></br><br></br>
            <div>
                <div class="site-nav-container container"> 
                 {/* <img src ="myntra-logo.png" style={{ height:"40px" , width:"80px"}}/> */}
                  <span className="head">
                <ol class="checkout-steps"> 
                <li class="step step1 active">BAG</li> 
                <li class="divider"></li> 
                <li class="step step2">ADDRESS</li> 
                <li class="divider"></li> 
                <li class="step step3">PAYMENT</li> 
                </ol> 
                <div class="secureContainer"> 
                <div class="sprite-secure secureIcon"></div> 
                <div class="secure">100% SECURE</div> 
                </div> 
                </span>
                </div>
            </div>

<div class="container">
<table id="cart" class="table table-hover table-condensed">
    <thead>
        <tr>
            <th style={{width:"50%"}}>Product</th>
            <th style={{width:"10%"}}>Price</th>
            <th style={{width:"8%"}}>Quantity</th>
            {/* <th style={{width:"22%"}}class="text-center">Subtotal</th> */}
            <th style={{width:"10%"}}></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-sm-2 hidden-xs"><img src={`/${this.state.item.image }`} alt="..." class="img-responsive"/></div>
                    <div class="col-sm-10">
                        <h4 class="nomargin">{`${this.state.item.brand }`}</h4>
                        <p className="name">{`${this.state.item.pname }`}</p>
                    </div>
                </div>
            </td>
        <td data-th="Price"> {`${this.state.item.price }`}</td>
        <td data-th="Quantity">

      <input type="number" name="points" step="1" class="form-control text-center" value="1" />
        </td>
        {/* <td data-th="Subtotal" class="text-center">Rs. Total</td> */}
        <td class="actions" data-th="">
            <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
            <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>								
        </td>
    </tr>
</tbody>
            <tfoot>
                <tr>
                    <td><a href="../Men" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
                    <td colspan="2" class="hidden-xs"></td>
                    {/* <td class="hidden-xs text-center"><strong>Total $150.00</strong></td> */}
                    <td><a href="https://www.paypal.com/webapps/hermes?token=5EY097812P7754247&useraction=commit&mfid=1546377013907_cf1dec6830d7" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
                </tr>
            </tfoot>
        </table>
</div>

            {/* <div className="cont">
                <div className="row">
                <div className="column1">
            <img className="image" src=""/></div>
            <div className="column2">
            <br></br><br></br>
            <p className="shirt-brand">gg</p>
            <p className="shirt-name"></p>
            <p className="shirt-price"></p></div>
            </div>
            </div> */}
            <div class="checkout-footer"> 
            <div class="content"> 
            <div class="images">
            <span class="payment-card">
            <PaymentIcon id="visa" style={{ margin: 10, width: 100 }}className="payment-icon"/>
            
            <PaymentIcon id="mastercard" style={{ margin: 10, width: 100 }}className="payment-icon"/> 
        
            <PaymentIcon id="paypal" style={{ margin: 10, width: 100 }}className="payment-icon"/>
                </span>
            
            <span className="help">Need Help ? Contact Us</span> 
            </div> </div>
            </div></div>
         );
    }
}
 
export default cart;