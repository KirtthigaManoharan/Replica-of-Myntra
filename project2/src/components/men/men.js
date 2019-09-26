import React, {Component} from 'react';
import Header from './header';
import Panel from './panel';
import SideNav from './sidenav';
import Grid from './grid';
import './men.css';
class men extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="whole">
                 <br></br><br></br><br></br>
                <Panel />
                <hr></hr> 
                 <SideNav />
            </div>
         );
    }
}
 
export default men;