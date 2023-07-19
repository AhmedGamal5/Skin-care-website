import React, { useState } from "react";
import "./FourthSection.css";
import flower from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

const FourthSection = () => {
  const [ListProducts, setListProducts] = useState(ProductsData);
  const filter = (type) => {
    setListProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className="fourth-sec">
      <img src={flower} alt="line" className="flowerimg" />
      <h1>Our Feature Products</h1>
      <div className="items">
        <ul>
          <li onClick={() => setListProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioner</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>
        <div className="products">
          {ListProducts.map((product, i) => (
            <div className="productcontent">
              <div className="name">
                <span>{product.name}</span>
                <span>{product.detail}</span>
                <span>{product.price}$</span>
                <span className="shopnow">show now</span>
              </div>
              <img src={product.img} alt="pic" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
