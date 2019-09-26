import React, {Component} from 'react';
import './grid.css';
import {Link }from 'react-router-dom';
import Display from '../men/display';
import axios from 'axios';
import Cart from '../cart/cart';
import Login from '../login/login';
class grid extends Component {
    state = {  
        items : [],
        brand : [],
        pname : [],
        price : [],
        oprice : [],
        cart: [],
        loggedInStatus : true
    }
    // checkLoginStatus()
    // {        
    //     if(this.state.loggedInStatus===true)
    //          {
    //             window.location='cart';
    //          }
    //          else{
    //             window.location='login';
    //          }  
    //   }
    
    render() { 
        const items = this.props.items.map(item => {
            
            return (
                           
          <div className="product-grid">
              <div className="product-image">
                  <a href="#">
                  <Link to={`/display/${item.id}`}><img className="pic-1" src= {item.image} key= {item.image} />
                  </Link>
                  </a>
                  <ul className="social">
                      <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                      <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                      <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                  {/* <span className="product-new-label">Sale</span>
                  <span className="product-discount-label">20%</span> */}
              </div>
              <div className="product-content">
                  <h3 className="title"><a href="#">{item.brand}</a></h3>
                  <h3 className="title"><a href="#">{item.pname}</a></h3>
                  <div className="price">{item.price}
                      <span>{item.oprice}</span>
                  </div>
                  <a className="add-to-cart" >
                {/* //   onClick={this.checkLoginStatus.bind(this)}> */}
                  <Link to={`cart/${item.id}`}>
                  + Add To Cart</Link>
                  </a>
              </div>
          </div>
    

              )
            })
        
        return ( 
            <div className="container">
             <div className="row">
                {items}
                </div>
                </div>
            
         );
    }
}
 
export default grid;