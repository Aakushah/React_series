import {createContext, useContext } from "react";

export const ThemeContext=createContext({

    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:() =>{},

});


//them provider name start with uppercase

export const ThemeProvider=ThemeContext.Provider;


//custome hook


export default function useTheme(){
    return useContext(ThemeContext);
}

