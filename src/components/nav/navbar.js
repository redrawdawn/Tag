import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <nav>
          <ul>
            <li>
                <Link className="navbar__link" to="/newgame">GAMEofNEW</Link>
            </li>
            <li>
                <Link className="navbar__link" to="/game">justGAME</Link>
            </li>
            <li>
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li>
                <Link className="navbar__link" to="/profile">Your Profile</Link>
            </li>
           
          </ul>
        </nav>
    )
}