import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <nav>
          <ul>
            <li>
                <Link className="navbar__link" to="/">Login</Link>
            </li>
            <li>
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
           
          </ul>
        </nav>
    )
}