import { Container, Row } from "reactstrap"
import Administrator from "./Administrator"
import ImportantTaskList from "./ImportantTask"
import MonthlySales from "./MonthlySales"
import RecentTransactionTable from "./RecentTransaction"
import SalesAnalytics from "./SalesAnalytics"
import ShiftsSummary from "./ShiftsSummary"
import TrendingOrders from "./TrendingOrders"
import UserInfo from "./UserInfo"

const DefaultDashboardContainer = () => {
    return (
       <Container fluid className="default-dashboard">
          <Row className="widget-grid">
            <UserInfo />
            <Administrator />
            <ShiftsSummary />
            <MonthlySales />
            <RecentTransactionTable />
            <ImportantTaskList />
            <TrendingOrders />
            <SalesAnalytics />
          </Row>
       </Container>
    )

}

export default DefaultDashboardContainer