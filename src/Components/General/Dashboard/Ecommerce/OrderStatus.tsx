import { HeadPhone, HeadPhonePrice, Href, ImagePath, Orderstatus } from "@/Constant";
import { OrderStatusData } from "@/Data/Ecommerce";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import RatioImage from "@/CommonComponent/RatioImage";

const OrderStatus = () => {
  return (
    <Col md="6">
      <Card>
        <DashboardCommonHeader title={Orderstatus} />
        <CardBody>
          <div className="order-place">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <RatioImage src={`${ImagePath}/dashboard-2/product/headphone.png`} alt=""/>
              </div>
              <div className="flex-grow-1">
                <Link href={Href}>
                  <h6>{HeadPhone}</h6>
                  <h5 className="font-primary f-w-600 mt-1">{HeadPhonePrice}</h5>
                </Link>
              </div>
            </div>
          </div>
          <ul className="track-order">
            {OrderStatusData?.map((item, index) => (
              <li key={index}>
                <div className="d-flex">
                  <div className={`flex-shrink-0 bg-${item.color}`}>
                    <RatioImage src={`${ImagePath}/dashboard-2/product/${item.image}`} alt=""/>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <Link href={Href}>
                        <h6>{item.title}</h6>
                        <p className="text-truncate">{item.description}</p>
                      </Link>
                      <span className={`font-${item.color} f-w-500`}>{item.date}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus;
