import {useState, useEffect} from 'react';

import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import {Navbar} from "../components/Navbar/Navbar";
import fetchData from "../api.js";
import {useTheme} from "../context/ThemeContext"

import "./inventory.css"
import "../index.css"

export function Inventory() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {theme, setTheme} = useTheme()

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
    <>
      <h1>Inventory</h1>
      <Navbar />
      <div className="category-buttons">
          <Button
            className={theme? "category__btn button--dark" : "category__btn "}
            key="all"
            name="#All"
            onClick={() => filterProductsByCategory('all')} // Handle 'All' category separately
          />
          {categories.map((category) => (
            <Button
              className={theme? "category__btn button--dark" : "category__btn "}
              key={category}
              name={`#${category}`}
              onClick={() => filterProductsByCategory(category)} // Pass category to filter
            />
          ))}
        </div>
      <div className="container flex flex-wrap centered">
        
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
    </>
  );
}