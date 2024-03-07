import React from "react";
import "../styles/Main.css"
export default function Fallback()
{
    return (
        <React.Fragment>
            <div className="fallback">
            {"Error...Could not find the requested page :("}
            </div>
        </React.Fragment>
    )
}