import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Inventory } from "./pages/Inventory"
import { useTheme } from "./context/ThemeContext";
import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";


export default function App() {

  const { theme, setTheme } = useTheme();

  return (
    <>
      <BrowserRouter>
      <main className={theme ? "dark" : ""}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="/favorites" element={<h1>Favorites</h1>}/>
        </Routes>
      </main>
      {/* TODO: <Footer/> */}
      </BrowserRouter>
    </>
  )
};