import React from "react";
import "./Header.css"

const Header = (props) => {
    return (
        <div className="HeaderBar">
            <div className="header-info">
                <div className="HeaderText"> Where in the world?</div>
                <button className="DarkButton">Dark Mode</button>
            </div>
        </div>
        

    );
}

export default Header;