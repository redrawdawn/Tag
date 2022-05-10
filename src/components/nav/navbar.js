import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                {/* <li>
                    <Link className="navbar__link" to="/newgame">GAMEofNEW</Link>
                </li> */}
                <li>
                    <Link className="navbar__link" to="/game/taghistory">
                        <div>
                            <img src="../../../icons/result.png"/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="navbar__link" to="/game">
                        <div>
                            <img src="../../../icons/home.png"/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="navbar__link" to="/profile">
                        <div>
                            <img src="../../../icons/user.png"/>
                        </div>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}