import React, {Component} from 'react';
import './panel.css';
class panel extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
<div className="bs-example">
<nav className="navigtn">
    <ul className="breadcrumb-list">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Clothing</a></li>
        <li className="breadcrumb-item active"><b>Formal Shirts for Men</b></li>
    </ul>
</nav>
        </div>

        <div className=" row-base">
<div className="title-container">
<h1 className="title-title"><b>Formal Shirts For Men</b></h1>
<span className="count"></span>
</div>
</div>
<div>
<span className="filters" style={{fontFamily : "Whitney "}}> <strong>FILTERS</strong></span>
<span>
   
<button type="button" className="btn dropdown-toggle" id="input-group-prepend" data-toggle="dropdown">
 Bundles
</button>
<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
 Collar
</button>
<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
 Fabric
</button>
<button type="button" className="btn dropdown-toggle"  data-toggle="dropdown">
 Fit
</button>
<button type="button" className="btn dropdown-toggle"  data-toggle="dropdown">
 Hemline
</button>
<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
 Length
</button>
<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
 Occasion
</button> 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">
Sort by :  <span><b>Recommended</b></span>
</button>
</span>
</div>
</div>
 );
}
}

export default panel;