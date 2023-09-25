import {useState, useEffect} from 'react';

import { Card } from "../Card/Card"

import "./itemList.css"
import "../../index.css"

const URI = "https://fakestoreapi.com"

const fetchProducts = async(query="products") => {
  const data = await fetch(`${URI}/${query}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
  return data
  }

const fetchCategories = async() => { const categories =
  await fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .catch(err =>console.log(err))
  return categories                             
}

export function ItemList() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data)
      });
    fetchCategories()
      .then(categories =>{
        setCategories(categories)
      });
  }, []);
  
fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json()) 
  
  return (
    <div className="container" >
              { categories.map(category => (
      <button className="category__btn" key={category}>#{category}</button>
              ))}
      { products.map(item => (
          <Card key={item.id}
            title={item.title}
            image={item.image}
            details={item.price}
            body={item.description}
            tags={item.category} />
       ))}
    </div>
  )
}