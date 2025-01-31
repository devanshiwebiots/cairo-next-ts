import { PlaceOrder, Products, Subtotal, Total } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { getallCardTotal, getCartTotal } from "@/utils/Ecommerce.service";
import React from "react";
import { Button, Col } from "reactstrap";
import CheckoutShipping from "../CheckoutShipping";
import CheckPayment from "../CheckPayment";

const ProductCheckout = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  return (
    <Col xl="6" sm="12">
      <div className="checkout-details">
        <div className="order-box">
          <div className="title-box">
            <div className="checkbox-title">
              <h3>{Products}</h3>
              <span>{Total}</span>
            </div>
          </div>
          <ul className="qty">
            {cart &&
              cart.map((item, index) => (
                <li key={index}>
                  {item.name} x {item.total} <span>$ {getCartTotal(item)}</span>
                </li>
              ))}
          </ul>
          <ul className="sub-total">
            <li>
              {Subtotal} <span className="count">$ {getallCardTotal(cart)}</span>
            </li>
            <CheckoutShipping />
          </ul>
          <ul className="sub-total total">
            <li>
              {Total} <span className="count">$ {getallCardTotal(cart)}</span>
            </li>
          </ul>
          <CheckPayment />
          <div className="order-place">
            <Button color="primary">{PlaceOrder}</Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCheckout;
