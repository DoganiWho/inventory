import {useState, useEffect} from 'react';

import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

import "./itemList.css"
import "../../index.css"

const URI = "https://fakestoreapi.com"

const fetchData = async(query) => {
  const data = await fetch(`${URI}/${query}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
  return data
}

export function ItemList() {
   const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchData('products')
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      });
    fetchData('products/categories')
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  function filterProductsByCategory(category) {
    if (category === 'all') {
      // If 'All' category is selected, show all products
      setFilteredProducts(products);
    } else {
      // Filter products based on the selected category
      const filtered = products.filter((item) => item.category === category);
      setFilteredProducts(filtered);
    }
  }

  return (
    <div className="container">
      <div className="category-buttons">
        <Button
          className="category__btn"
          key="all"
          name="#All"
          handleClick={() => filterProductsByCategory('all')} // Handle 'All' category separately
        />
        {categories.map((category) => (
          <Button
            className="category__btn"
            key={category}
            name={`#${category}`}
            handleClick={() => filterProductsByCategory(category)} // Pass category to filter
          />
        ))}
      </div>
      {filteredProducts.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.image}
          details={item.price}
          body={item.description}
          tags={item.category}
        />
      ))}
    </div>
  );
}