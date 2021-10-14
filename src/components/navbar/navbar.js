import React from "react";
import reactDom from "react-dom";
import './navbar.css';

 
class navbar extends React.Component{
    render() {
        return(
            <div className="NAVBAR">
                <div className = "navbar">
                    <ul className = "navbar_list">
                        <li className = "navbar_list_items">About Me</li>
                        <li className = "navbar_list_items">Projects</li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default navbar;
