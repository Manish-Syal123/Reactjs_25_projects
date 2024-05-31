import React, { useEffect, useState } from "react";
import "./filter.css";
const FilterProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");
  const [filteredItems, setFilterItems] = useState([]);
  async function fetchProducts() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });
      const result = await apiResponse.json();
      if (result && result.products && result.products.length > 0) {
        setProducts(result.products);
        setFilterItems(result.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let cpyProducts = [...products];
    setFilterItems(
      currentSelectedCategory !== ""
        ? cpyProducts.filter(
            (products) =>
              products.category.toLowerCase() ===
              currentSelectedCategory.toLowerCase()
          )
        : cpyProducts
    );
  }, [currentSelectedCategory]);

  const uniqueCategories =
    products && products.length > 0
      ? [...new Set(products.map((items) => items.category))]
      : [];
  console.log(uniqueCategories);
  if (loading) return <h3>Fetching the products!! Please wait......</h3>;
  return (
    <div className="filter-products-container">
      <h1>Filter Products by Category</h1>
      <div className="filter-categories-container">
        {uniqueCategories.map((uniqueCategoryItems) => (
          <button
            onClick={() =>
              setCurrentSelectedCategory(
                currentSelectedCategory !== "" ? "" : uniqueCategoryItems
              )
            }
            className={`${
              currentSelectedCategory === uniqueCategories ? "active" : ""
            }`}
          >
            {uniqueCategoryItems}
          </button>
        ))}
      </div>
      <ul className="list-of-products">
        {filteredItems && filteredItems.length > 0
          ? filteredItems.map((Items) => (
              <li key={Items.id}>
                <p>{Items.title}</p>
                <button>{Items.category}</button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default FilterProducts;
