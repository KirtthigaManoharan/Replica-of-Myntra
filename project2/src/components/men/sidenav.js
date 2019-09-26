import React, {Component} from 'react';
import './sidenav.css'
import Grid from './grid'
class sidenav extends Component {
    state = { items:[] }
    componentDidMount(){
        this.getItems()
      }
      getItems(){
        fetch('http://localhost:3003/crud')
          .then(response => response.json())
          .then(items => this.setState({items}))
          .catch(err => console.log(err))
      }
    render() { 
        return ( 
        <div className="row">
            <div className="navcolumn">
                <div className="side">
                    <p><strong>BRANDS</strong></p>
              <input type="checkbox" value="Louis Philippe"/>Louis Philippe<br></br>
              <input type="checkbox" value="Van Heusan"/>Van Heusan<br></br>
              <input type="checkbox" value="Peter England"/>Peter England<br></br>
              <input type="checkbox" value="Raymond"/>Raymond<br></br>
              <input type="checkbox" value="Park Avenue"/>Park Avenue<br></br>
              <input type="checkbox" value="Blackberrys"/>Blackberrys<br></br>
              <input type="checkbox" value="Hancook"/>Hancook<br></br>
              <input type="checkbox" value="Hancook"/>Hancook<br></br>
              <input type="checkbox" value="Arrow"/>Arrow<br></br>
              <input type="checkbox" value="Allen SOlly"/>Allen Solly<br></br> 
            </div>
            </div>
            <div className="gridcolumn">
                <Grid items={this.state.items}/>
            </div>
            </div>
         );
    }
}
 
export default sidenav ;