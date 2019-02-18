import {Link} from "react-router-dom";
import React from "react";

export default () => (
    <header>
        <h1 className="title">moviefy</h1>
        <div className="menu row">
        <Link className="menuItem col-md-4" to="/"> Now Playing </Link>
        <Link className="menuItem col-md-4" to="/search"> Search </Link>
        <Link className="menuItem col-md-4" to="/list" > My List </Link>
        </div>
    </header>
);