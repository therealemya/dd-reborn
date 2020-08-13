import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateDonation extends Component{
    render() {
        return(

            <div>
                <h5>Create Donation Feature</h5>
                <Link to='/user'><button>Return</button></Link>

            </div>

        );
    }
}