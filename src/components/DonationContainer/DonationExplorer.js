import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './DonationExplorer.css';

export default class DonationExplorer extends Component{

    render(){
        return(
            <div className="donation-explorer-page">
              <div className="Ebutton">
                <Link to="/user" id="user-home-link"><button>Current User</button></Link>
                </div>
               <center> 
              
                   <div className="Dfill">  
                <p>Donations</p>
                </div>
                <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                 
               < div className="Pfill">  
                <p>This component will be what you first see when you are logged in successfully.
                    You will see local or trending donations.
                </p>
                </ div>

                </center>
            </div>
            
        );
    }

}