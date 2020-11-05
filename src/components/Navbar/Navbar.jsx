import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <div className="navigation">
                <input type="checkbox" className="checkbox" id="navi-toggle"></input>

                <label for="navi-toggle" className="button">
                    <span className="icon">&nbsp;</span>
                </label>

                <div className="background">&nbsp;</div>

                <nav className="nav">
                    <ul className="list">
                        <li className="item"><Link to="/neuro" className="link">Home</Link></li>
                        <li className="item"><Link to="/about" className="link">About</Link></li>
                        {/* <li className="item"><Link to="#" className="link">Curriculum Vitae</Link></li>
                        <li className="item"><Link to="#" className="link">Research</Link></li>
                        <li className="item"><Link to="#" className="link">Publications</Link></li> */}
                        <li className="item"><Link to="/teaching" className="link">Teaching</Link></li>
                        {/* <li className="item"><Link to="#" className="link">Readings</Link></li>
                        <li className="item"><Link to="#" className="link">Personnel</Link></li>
                        <li className="item"><Link to="#" className="link">Traveling</Link></li>
                        <li className="item"><Link to="#" className="link">Openings</Link></li> */}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
