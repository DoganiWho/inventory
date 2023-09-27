import {useTheme} from "../../context/ThemeContext";
import {Button} from "../Button/Button";

export function Navbar() {
  const {theme, setTheme} = useTheme()

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Button 
          className={theme? "theme__btn button--dark" : "theme__btn"} 
          onClick={()=>setTheme(!theme)} 
          name={theme? "Light" : "Dark"}
          />
      </div>
    </div>
  )
}