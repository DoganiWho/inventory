import {useTheme} from "../../context/ThemeContext"

export function Navbar() {
  const {theme, setTheme} = useTheme()

  return (
    <div className="navbar">
      <div className="navbar__container">
        <button className="theme__btn" onClick={()=>setTheme(!theme)}>
          {theme? "Light" : "Dark"}
        </button>
      </div>
    </div>
  )
}