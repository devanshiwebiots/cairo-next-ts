import { useAppSelector } from "@/Redux/Hooks";
import React, { Fragment } from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import CommonButton from "../Common/CommonButton";
import ProductFive from "./ProductFive";
import ProductFour from "./ProductFour";
import ProductOne from "./ProductOne";
import ProductThree from "./ProductThree";
import ProductTwo from "./ProductTwo";

const ProductTabContent = () => {
  const { navId } = useAppSelector((state) => state.addProduct);
  return (
    <Fragment>
      <Col xxl="9" xl="8" className="box-col-8 position-relative">
        <TabContent activeTab={navId}>
          <TabPane tabId={1}>
            <ProductOne />
          </TabPane>
          <TabPane tabId={2}>
            <ProductTwo />
          </TabPane>
          <TabPane tabId={3}>
            <ProductThree />
          </TabPane>
          <TabPane tabId={4}>
            <ProductFour />
          </TabPane>
          <TabPane tabId={5}>
            <ProductFive />
          </TabPane>
        </TabContent>
      </Col>
      <CommonButton />
    </Fragment>
  );
};

export default ProductTabContent;
