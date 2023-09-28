import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Inventory } from "./pages/Inventory"
import { useTheme } from "./context/ThemeContext";
import "./index.css";


export default function App() {

  const { theme, setTheme } = useTheme();

  return (
    <BrowserRouter>
    <main className={theme ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<Inventory/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  )
};