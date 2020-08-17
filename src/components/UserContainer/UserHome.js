import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/DDLogo.png';


export default class UserHome extends Component{
    render() {
        return(

            <div className="user-home">

                <div className="user-container">

                    <img src={logo} alt="logo" />
                    
                    <hr/>

                    <h5>My Profile</h5>

                    <hr/>

                    <h5><Link to='/user/mydonations'>My Donations</Link></h5>

                    <hr/>

                    <h5><Link to="user/payments">Payment</Link></h5>

                    <hr/>

                    <h5>Settings</h5>

                    <br/>
                    <br/>
                    <Link to="/user/create" id="user-home-link"><button>Create A Donation</button></Link>

                </div>

            </div>

        );
    }
}