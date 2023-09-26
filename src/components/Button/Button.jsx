import "./button.css"

export function Button({ handleClick, name="Button"}) {

  return (
    <button onClick={handleClick}>{name}</button>
  )
}