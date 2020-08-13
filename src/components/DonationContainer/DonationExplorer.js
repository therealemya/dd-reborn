import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class DonationExplorer extends Component{

    render(){
        return(
            <div className="donation-explorer-page">
                <Link to="/user" id="user-home-link"><button>Current User</button></Link>
                <h1>Donations</h1>
                <p>This component will be what you first see when you are logged in successfully.
                    You will see local or trending donations.
                </p>
            </div>
        );
    }

}