import { Container, Row } from "reactstrap";
import BrowserConfigurationWidget from "./BrowserConfigurationWidget";
import MobileApp from "./MobileApp";
import OrderStatusWidget from "./OrderStatusWidget";
import ProjectCreated from "./ProjectCreated";
import SalesAnalyticsWidget from "./SalesAnalyticsWidget";
import ShiftsSummary from "./ShiftsSummary";
import TotalSalesWidget from "./TotalSalesWidget";
import TransactionHistory from "./TransactionHistory";
import Visitors from "./Visitors";

const GeneralWidgetsContainer = () => {
  return (
    <Container fluid className="general-widget">
      <Row>
        <MobileApp />
        <Visitors />
        <TransactionHistory />
        <ShiftsSummary />
        <OrderStatusWidget />
        <BrowserConfigurationWidget />
        <TotalSalesWidget />
        <SalesAnalyticsWidget />
        <ProjectCreated />
      </Row>
    </Container>
  );
};

export default GeneralWidgetsContainer;
