import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="div-cointainer">
      <form className="form">
        <h3>Billing Information</h3>
        <div className="input-container">
          <input
            class="form-control"
            type="text"
            placeholder="Enter your name"
            aria-label="default input example"
          />
        </div>
        <div className="input-container">
          <input
            class="form-control"
            type="email"
            placeholder="Enter your email"
            aria-label="default input example"
          />
        </div>
        <div className="input-container">
          <input
            class="form-control"
            type="number"
            placeholder="Phone number"
            aria-label="default input example"
          />
        </div>
        <div className="input-container">
          <input
            class="form-control"
            type="text"
            placeholder="Street adress"
            aria-label="default input example"
          />
        </div>
        <div className="input-container">
          <input
            class="form-control"
            type="text"
            placeholder="City"
            aria-label="default input example"
          />
        </div>
        <div className="input-container">
          <input
            class="form-control"
            type="number"
            placeholder="Postal code"
            aria-label="default input example"
          />
        </div>
        <div className="input-container">
          <input
            class="form-control"
            type="text"
            placeholder="Country"
            aria-label="default input example"
          />
        </div>
        <div className="checkout-container">
          <div className="checkout-container-cart">
            <h6 className="hache6">
              Total Qty: <span className="span">0</span>
            </h6>
            <h6 className="hache6">
              Subtotal: <span className="span">$120</span>
            </h6>
            <h6 className="hache6">
              Shipping: <span className="span">0</span>
            </h6>
            <h6 className="hache6">Free shipping</h6>
            <h4 className="hache4">
              Total Cost: <span className="span">$120</span>
            </h4>
          </div>
          <button className="btn-buy w-100">Place an order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
