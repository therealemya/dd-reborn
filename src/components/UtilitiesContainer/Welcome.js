import React, { Component } from 'react';
import DDLogo from '../../assets/DDLogo.png';
import {Link} from 'react-router-dom';





export default class Welcome extends Component {
    render() {

        return (
            <div className="welcome">
                <div className="welcome-info">
                    <center>
                    <h1>Donate</h1>
                    <h2>Differently</h2>
                    </center>
                    <div>
                    <center>
                    <img src={DDLogo} alt="logo" className="welcomelogo" />
                    </center>
                    <center>
                   <Link to='/explorer'><button>Enter</button></Link>
                    
                    </center>
                </div>
                
                </div>
            </div>
        );
    }
}