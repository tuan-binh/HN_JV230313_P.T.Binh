import React from "react";

function Item({ img, name, price, head, desc, handleAddToCart }) {
  return (
    <div className="item-product">
      <div className="logo">
        <i className="fa-brands fa-apple"></i>
      </div>
      <img src={img} alt="" />
      <div className="body-product">
        <div className="head">
          <p>{name}</p>
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="body-content">
          <p>{head}</p>
          <p>{desc}</p>
          <div className="action">
            <p>$ {price.toLocaleString()}</p>
            <button onClick={handleAddToCart}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
