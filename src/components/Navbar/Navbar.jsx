import { Link } from "react-router-dom";
import {useTheme} from "../../context/ThemeContext";
import {Button} from "../Button/Button";


const linkStyles = {
  // marginRight: "10px",
  color: "white",
  backgroundColor: "lightBlue",
  borderRadius: ".75rem",
  borderRadius: "0.75rem",
  padding: ".25rem",
  margin: ".5rem",
  border: "none",
  outline: "1px solid transparent",
}

export function Navbar() {
  const {theme, setTheme} = useTheme()

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" style={linkStyles} >Home</Link>
        <Link to="/about" style={linkStyles} >About</Link>
        <Link to="/inventory" style={linkStyles} >Inventory</Link>
        <Link to="/favorites" style={linkStyles} >Favorites</Link>
        <Button 
          className={theme? "theme__btn button--dark" : "theme__btn"} 
          onClick={()=>setTheme(!theme)} 
          name={theme? "Light" : "Dark"}
          />
      </div>
    </div>
  )
}