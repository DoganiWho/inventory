import React from "react"
import "./card.css"

export function Card(){
  return (
    <div className="card">
      <p className="card__title">title</p>
      <div className="card__content" >content</div >
      <div className="card__footer">footer</div >
    </div>
  )
}