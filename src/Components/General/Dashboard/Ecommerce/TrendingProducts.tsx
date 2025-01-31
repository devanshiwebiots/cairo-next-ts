import { ButtonNew, BuyNowButton, Completelyatease, Href, ImagePath, NewSportsShoes, Trendingproducts } from "@/Constant";
import { TrendingProductsData } from "@/Data/Ecommerce";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import RatioImage from "@/CommonComponent/RatioImage";

const TrendingProducts = () => {
  return (
    <Col xxl="6" lg="7" md="6" className="box-col-7">
      <Card className="top-selling">
        <DashboardCommonHeader title={Trendingproducts} />
        <CardBody>
          <Row>
            <Col sm="6">
              <div className="product-box">
                <span className="badge badge-primary left-badge">{ButtonNew}</span>
                <span className="badge badge-secondary right-badge">-25%</span>
                <div className="img-wrraper product-box-1">
                  <RatioImage src={`${ImagePath}/dashboard-2/selling/1.png`} alt=""/>
                </div>
                <div className="product-detail">
                  <p>{Completelyatease}</p>
                  <Link href={Href}>
                    <h5>{NewSportsShoes}</h5>
                  </Link>
                  <Link href={Href} className='btn btn-primary'>
                    <span className="fa fa-shopping-bag"></span>
                    {BuyNowButton}
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm="6">
              <Row className="product-block">
                {TrendingProductsData?.map((item, index) => (
                  <Col className="col-6" key={index}>
                    <div className="product-box">
                      <span className="badge badge-transparent right-badge font-primary">{item.discount}</span>
                      <div className="img-wrraper">
                        <RatioImage src={`${ImagePath}/dashboard-2/selling/${item.image}`} className="img-fluid" alt=""/>
                      </div>
                      <div className="product-detail">
                        <Link href={Href}> <h6>{item.name}</h6></Link>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TrendingProducts;
