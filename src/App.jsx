import React from "react"

import {Inventory } from "./pages/Inventory"
import {useTheme} from "./context/ThemeContext";
import "./index.css";


export default function App() {

  const {theme, setTheme} = useTheme();
  
  return (
    <main className={theme? "dark" : ""}>
      <Inventory />
    </main>
  )
}
