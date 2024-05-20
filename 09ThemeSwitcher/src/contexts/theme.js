import  { createContext, useContext} from "react";

export const ThemeContext = createContext({

    thememode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})


export const ThemeProvider = ThemeContext.Provider


// it is a custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}
// above Themecontext is the input to usecontext >
