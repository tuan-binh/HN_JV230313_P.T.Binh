import React from "react";
import Pay from "../Pay/Pay";

function Cart({
  cart,
  handleClearAll,
  handleRemoveProduct,
  handleAddProduct,
  handleMinusProduct,
  payProduct,
}) {
  function totalCoin() {
    let sum = 0;
    cart.forEach((e) => {
      sum += e.count * e.price;
    });
    return sum;
  }

  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          {cart.length ? (
            <>
              {" "}
              <div className="product">
                {cart.map((e, i) => {
                  return (
                    <div className="cartProduct">
                      <img src={e.imageUrl} alt="" />
                      <p>{e.name}</p>
                      <p className="count-product">
                        <i
                          onClick={() => handleMinusProduct(i)}
                          class="fa-regular fa-circle-left"
                        ></i>
                        {e.count}
                        <i
                          onClick={() => handleAddProduct(i)}
                          class="fa-regular fa-circle-right"
                        ></i>
                      </p>
                      <p>{e.price.toLocaleString()} $</p>
                      <p>
                        <i
                          onClick={() => handleRemoveProduct(i)}
                          class="fa-solid fa-trash"
                        ></i>
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="product">
              <h2
                style={{
                  textAlign: "center",
                  color: "#ccc",
                  marginTop: "200px",
                }}
              >
                Bạn chưa có sản phẩm nào
              </h2>
            </div>
          )}
          <div className="action-cart">
            <div>
              <p className="total">
                Total: <i class="fa-solid fa-wallet"></i>{" "}
                {totalCoin().toLocaleString()}
              </p>
              {totalCoin() === 0 ? (
                <button>
                  <i class="fa-regular fa-paper-plane"></i> Pay
                </button>
              ) : (
                <button
                  onClick={payProduct}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fa-regular fa-paper-plane"></i> Pay
                </button>
              )}

              <button onClick={handleClearAll}>
                <i class="fa-regular fa-trash-can"></i> Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
      <Pay cart={cart} />
    </div>
  );
}

export default Cart;
