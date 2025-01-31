import { Container, Row } from "reactstrap";
import CryptoAnnotations from "./CryptoAnnotations";
import CryptocurrencyPrices from "./CryptocurrencyPrices";
import Finance from "./Finance";
import LiveProducts from "./LiveProducts";
import MonthlyHistory from "./MonthlyHistory";
import MonthlySales from "./MonthlySalesWidget";
import OrderStatus from "./OrderStatusWidget";
import ProjectCreatedWidget from "./ProjectCreatedWidget";
import SalesOverview from "./SalesOverview";
import StockMarket from "./StockMarket";
import TotalSaleWidgets from "./TotalSaleWidget";
import TurnOver from "./TurnOver";
import UsesWidget from "./UsesWidget";

const ChartWidgetsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <TotalSaleWidgets />
        <ProjectCreatedWidget />
        <SalesOverview />
        <MonthlyHistory />
      </Row>
      <Row>
        <LiveProducts />
        <TurnOver />
        <CryptocurrencyPrices />
        <CryptoAnnotations />
      </Row>
      <Row>
        <StockMarket />
        <Finance />
        <OrderStatus />
        <MonthlySales />
        <UsesWidget />
      </Row>
    </Container>
  );
};

export default ChartWidgetsContainer;
