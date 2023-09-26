import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const ThemeContext = createContext({});

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', [])

  return(
    <ThemeContext.Provider value={{ theme, setTheme}} >
      {children}
    </ThemeContext.Provider>
   )
}