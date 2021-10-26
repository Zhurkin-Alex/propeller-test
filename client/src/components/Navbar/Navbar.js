import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar__nav">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">
                    Опрос
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link"  exact="true"  to="/data">
                        Данные
                    </Link>
                </li>         
            </ul>
        </div>
    );
}

export default Navbar;