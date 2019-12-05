import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LogIn.css';

class LogIn extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <div><input placeholder="Name" className="joinInput" type="text"/></div>
                    <div><input placeholder="Room" className="joinInput mt-20" type="text"  /></div>
                    <Link >
                        <button className="button" type="submit">Sign In</button>
                    </Link>
                </div>
            </div>
        )
    }
    

}

export default LogIn;