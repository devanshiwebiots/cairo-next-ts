import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CalendarBootstrap } from "@/Constant";
import { Card, Col } from "reactstrap";
import { BootstrapCalendarBody } from "./BootstrapCalendarBody";

const BootstrapCalendar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CalendarBootstrap} />
        <BootstrapCalendarBody/>
      </Card>
    </Col>
  );
};

export default BootstrapCalendar;
