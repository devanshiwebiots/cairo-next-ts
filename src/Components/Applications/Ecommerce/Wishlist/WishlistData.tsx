import { Href, ImagePath } from "@/Constant";
import { WhishListProduct } from "@/Data/Ecommerce";
import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { Button, Col, Row } from "reactstrap";

const WishlistData = () => {
  return (
    <Row className="g-sm-4 g-3">
      {WhishListProduct.map((item, index) => (
        <Col xl="4" md="6" key={index}>
          <div className="prooduct-details-box">
            <div className="d-flex">
              <Image className="align-self-center img-fluid img-60" src={`${ImagePath}/ecommerce/${item.image}`} alt="#" width={60} height={60}/>
              <div className="flex-grow-1 ms-3">
                <div className="product-name">
                  <h6>
                    <a href={Href}>{item.name}</a>
                  </h6>
                </div>
                <Rating initialValue={5} size={17} />
                <div className="price d-flex border-0 p-0">
                  <div className="text-muted me-2">Price</div> : 210$
                </div>
                <div className="avaiabilty">
                  <div className="text-success">In stock</div>
                </div>
                <div>
                  <Button tag="a" href={Href} color="primary" size="xs">{`MoveToCarts`}</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default WishlistData;
