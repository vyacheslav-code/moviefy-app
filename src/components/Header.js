import {Link} from "react-router-dom";
import React from "react";

export default () => (
    <header>
        <h1 className="title">moviefy</h1>
        <div className="menu">
        <Link className="menuItem" to="/"> Now Playing </Link>
        <Link className="menuItem" to="/search"> Search </Link>
        <Link className="menuItem" to="/list" > My List </Link>
        </div>
    </header>
);