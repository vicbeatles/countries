import { createContext, useState } from "react";

export const ThemeContext = createContext('light');

const ThemeProvider = (props)=> {

    const [theme, setTheme] = useState('light');

    const themeChanger = ()=> {

        if(theme == 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    } 

    return <ThemeContext.Provider value={{theme, themeChanger}}>{props.children}</ThemeContext.Provider>
}

export default ThemeProvider;