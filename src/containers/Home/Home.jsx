import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
    return (
        <div className="Home">
            <div className="HomeHeaderCtn">
                <h1 className="HomeHeader">UCSD<br></br>Cognitive & <br></br>Computational  <br></br>Neuroscience Lab</h1>
                <Link to="/about" className="HomeSubHeader">
                    <h2 className="HomeSubHeader">EXPLORE</h2>
                </Link>
            </div>
        </div>
    )
}

export default Home;
