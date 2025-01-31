import { Col, Container, Row } from "reactstrap";
import CategorySummary from "./CategorySummary";
import CurrentCustomers from "./CurrentCustomers";
import LatestSales from "./LatestSales";
import OrderStatus from "./OrderStatus";
import ProductsOverview from "./ProductsOverview";
import RecentOrders from "./RecentOrders";
import TotalSales from "./TotalSales";
import TrendingProducts from "./TrendingProducts";

const EcommerceContainer = () => {
  return (
    <Container fluid className="ecommerce-dashboard">
      <Row>
        <Col xxl="9" className="box-col-12">
          <Row>
            <TotalSales />
            <OrderStatus />
            <CategorySummary />
          </Row>
        </Col>
        <CurrentCustomers />
        <TrendingProducts />
        <LatestSales />
        <ProductsOverview />
        <RecentOrders />
      </Row>
    </Container>
  );
};

export default EcommerceContainer;
