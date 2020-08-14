import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/DDLogo.png';
import './UserHome.css'
export default class UserHome extends Component{
    render() {
        return(

            <div className="user-home">
                 
                <div className="user-container">
                    
                <div className="userLogo">
                    <img src={logo} alt="logo" />
                    </div>
                    {/* <hr/> */}
                    <div className ="Border">
                    <div className ="MyPro">

                    <h5>My Profile</h5>
                    </div>
                    </div>
{/* 
                    <hr/> */}
                            <div className = "MyDon">
                    <h5><Link to='/user/mydonations'>My Donations</Link></h5>
                            </div>
                    {/* <hr/> */}
                             <div className = "MyPay">
                    <h5><Link to="user/payments">Payment</Link></h5>
                    </div>

                    {/* <hr/> */}
                            <div className = "MySet">
                    <h5>Settings</h5>
                      
                    <br/>
                    <br/>
                    <Link to="/user/create" id="user-home-link"><button>Create A Donation</button></Link>
                    </div>
                </div>

            </div>

        );
    }
}