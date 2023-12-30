import React from "react";
import { NavLink as Link } from 'react-router-dom';

export default function Body() {
    return (
        <div className="order-here">

            <Link to="itemList">
                <button className="menu-button" >
                    {/* <div className="button-container">Item List</div> */}
                </button>
                <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"1rem"}}>
                    <b>Click Above To View Item list</b>
                </div>
            </Link>

        </div>

    );
}