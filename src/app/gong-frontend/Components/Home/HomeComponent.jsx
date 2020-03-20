import React, { Component } from 'react';

class Home extends Component{
    render(){
        return (
            <div className="banner-area">
                {/* eslint-disable-next-line no-useless-concat */}
                <div className="banner-content" style={{  backgroundImage: "url(" + "http://localhost:3000/frontend/images/gong-banner.png" + ")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                <h1>Everybody is talented</h1>
                <p>because everybody who is human has something to Express.</p>
                <button className="btn btn-primary rounded-pill">Join Now</button>
                </div>
            </div>
        );
    }
}
export default Home;
