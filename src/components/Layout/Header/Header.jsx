import React, { useContext } from "react";
import "./Header.css"
import { ThemeContext } from "../../../context/ThemeProvider";


const Header = (props) => {

    const {theme, themeChanger} = useContext(ThemeContext)

    return (
        <div className={theme == 'light' ? 'HeaderBar' : 'HeaderBarDark'}>
            <div className="header-info">
                <div className="HeaderText"> Where in the world?</div>
                <button className={theme == 'light' ? 'DarkButton' : 'LightButton'} onClick={themeChanger} ><div className={theme == 'light' ? 'dark-icon' : 'light-icon'}></div><div>Dark Mode</div></button>
            </div>
        </div>

    );
}

export default Header;