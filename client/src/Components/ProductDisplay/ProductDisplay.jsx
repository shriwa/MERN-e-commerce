import React from "react";
import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="Product-display">
      <div className="Product-display-left">
        <div className="Product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="Product-display-img">
          <img
            className="Product-display-main-img"
            style={{ height: "450px", width: "356px" }}
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <FaStar color="#ff8c00" />
          <FaStar color="#ff8c00" />
          <FaStar color="#ff8c00" />
          <FaStar color="#ff8c00" />
          <FaStar color="#ffd199" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          Step into elegance with our Striped Flutter Sleeve Peplum Blouse,
          featuring a stylish overlap collar and chic stripes for a modern,
          feminine allure.
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="shop-cart">
          <button className="shop-cart-buy">Buy Now</button>
          <button className="shop-cart-cart">Add to Cart</button>
        </div>
        <p className="product-display-right-categoty">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-categoty">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
