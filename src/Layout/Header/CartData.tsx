import SVG from "@/CommonComponent/SVG";
import { Cart, Checkout, Href, ImagePath, OrderTotal, ViewCart } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeCartData } from "@/Redux/Reducers/CartSlice";
import { CartType } from "@/Types/EcommerceType";
import { getallCardTotal } from "@/utils/Ecommerce.service";
import Image from "next/image";
import Link from "next/link";
import { X } from "react-feather";
import { Col } from "reactstrap";

export const CartData = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removeFromCart = (item: CartType) => dispatch(removeCartData(item.id));
  return (
    <li className='cart-nav onhover-dropdown'>
      <div className='cart-box'>
        <SVG iconId='Buy' />
      </div>
      <div className='cart-dropdown onhover-show-div'>
        <h5 className='f-18 f-w-600 mb-0 dropdown-title'>{Cart}</h5>
        <>
          {cart && cart.length > 0 ? (
            <ul>
              {cart?.map((item, index) => (
                <li key={index}>
                  <div className='d-flex'>
                    <Image className='img-fluid b-r-5 img-50' src={`${ImagePath}/ecommerce/${item.image}`} alt='' width={50} height={55} />
                    <div className='flex-grow-1'>
                      <span className='f-w-600'>{item.name}</span>
                      <h6>
                        {symbol}
                        {item.price} X {item.total}
                      </h6>
                    </div>
                    <div className='close-circle'>
                      <Link className='bg-denger' href={Href} onClick={() => removeFromCart(item)}>
                        <X />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
              <li className='total'>
                <h6 className='mb-0'>
                  {OrderTotal} :{" "}
                  <span className='f-right'>
                    {symbol} {getallCardTotal(cart)}
                  </span>
                </h6>
              </li>
              <li className='d-flex gap-2'>
                <Link href={`/ecommerce/cart`} className='view-cart btn btn-primary w-100'>
                  {ViewCart}
                </Link>
                <Link href={`/ecommerce/checkout`} className='view-checkout btn btn-primary w-100'>
                  {Checkout}
                </Link>
              </li>
            </ul>
          ) : (
            <Col sm={12} className='empty-cart-cls text-center'>
              <Image height={172} width={172} src={`${ImagePath}/ecommerce/icon-empty-cart.png`} className='img-fluid mb-4 mt-4' alt='Empty Cart' />
              <h5>
                <strong>Your Cart is Empty</strong>
              </h5>
              <h6>Add something to make me happy</h6>
              <Link className='btn btn-primary cart-btn-transform m-t-15 mb-4' href='/ecommerce/product'>
                continue shopping
              </Link>
            </Col>
          )}
        </>
      </div>
    </li>
  );
};
