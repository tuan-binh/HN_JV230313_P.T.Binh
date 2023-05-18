import React from "react";

function Pay({ cart }) {
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
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
            </div>
            <div className="modal-body">
              {cart.map((e) => {
                return (
                  <p>
                    <b>{e.name}</b>............... x{e.count}
                  </p>
                );
              })}
              <p className="total-modal">
                <b>TOTAL:</b> ..... {totalCoin().toLocaleString()} $
              </p>
            </div>
            <div className="modal-footer">
              <a href="http://localhost:3000">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Xác Nhận
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pay;
