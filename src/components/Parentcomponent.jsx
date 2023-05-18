import React from "react";
import { data } from "./data";
import { useState } from "react";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";

function Parentcomponent() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(index) {
    let check = -1;
    cart.forEach((e, i) => {
      if (e.name === data[index].name) {
        check = i;
      }
    });

    if (check === -1) {
      setCart([...cart, { ...data[index], count: 1 }]);
    } else {
      const newCart = [...cart];
      newCart[check].count += 1;
      setCart(newCart);
    }
  }
  console.log(cart);

  // handle clear All
  function handleClearAll() {
    setCart([]);
  }
  // handle clear product
  function handleRemoveProduct(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  // handle add product
  function handleAddProduct(index) {
    const newCart = [...cart];
    newCart[index].count += 1;
    setCart(newCart);
  }

  // handle minus product
  function handleMinusProduct(index) {
    const newCart = [...cart];
    if (newCart[index].count === 1) {
      newCart.splice(index, 1);
      setCart(newCart);
    } else {
      newCart[index].count -= 1;
      setCart(newCart);
    }
  }

  function payProduct() {}

  return (
    <div className="body bg">
      {/* phần card giỏ hàng */}
      <p className="cart">
        <i
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="fa-solid fa-cart-shopping"
        ></i>

        <p
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="number"
        >
          {cart.length}
        </p>
      </p>
      {/* Phần render sản phẩm */}
      <div className="listProduct">
        {data.map((e, i) => {
          return (
            <Item
              key={Math.random()}
              img={e.imageUrl}
              name={e.name}
              price={e.price}
              head={e.heading}
              desc={e.des}
              handleAddToCart={() => handleAddToCart(i)}
            />
          );
        })}
      </div>
      {/* offcanvas cũng như phần hiện thị sản phẩm đã mua */}
      <Cart
        cart={cart}
        handleClearAll={handleClearAll}
        handleRemoveProduct={handleRemoveProduct}
        handleAddProduct={handleAddProduct}
        handleMinusProduct={handleMinusProduct}
        payProduct={payProduct}
      />
    </div>
  );
}

export default Parentcomponent;
