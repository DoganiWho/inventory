import React from "react"
import "./card.css"

export function Card({
  title, 
  image, 
  body,
  details, 
  tags
}){
  return (
    <div className="card">
      <img className="card__image" src={image} alt={title} />
      <p className="card__title">{title}</p>
      <div className="card__body" >{body} </div >
      <div className="card__footer">
        <span > #{tags} </span>
        <span> ${details} </span>
      </div >
    </div>
  )
}