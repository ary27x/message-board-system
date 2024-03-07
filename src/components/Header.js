import React from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"
export default function Header()
{
    return (
        <React.Fragment>
            <div id=  "header-wrapper">
            <div id = "header-div">
                Message Board System
            </div>
            <div>
                <Link to="/all">
                <button className="header-button">/all</button>
                </Link>
                <Link to="/science">
                <button className="header-button">/science</button>
                </Link>
                <Link to="/music">
                <button className="header-button">/music</button>
                </Link>
                <Link to="/movie">
                <button className="header-button">/movie</button>
                </Link>
                <Link to="/sports">
                <button className="header-button">/sports</button>
                </Link>
                <Link to="/create">
                <button className="header-button header-create-button">Create</button>
                </Link>
            </div>
            </div>
        </React.Fragment>
    )
}