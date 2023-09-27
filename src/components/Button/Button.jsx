import "./button.css"

export function Button({ onClick, name="Button", className=""}) {

  return (
    <button className={className} onClick={onClick}>{name}</button>
  )
}