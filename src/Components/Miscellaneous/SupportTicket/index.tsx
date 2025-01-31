import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SupportTicket } from "@/Constant";
import { SupportTicketData } from "@/Data/SupportTicket";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TicketList from "./TicketList";
import TicketTable from "./TicketTable";

const SupportTicketContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={SupportTicket} span={SupportTicketData} headClass="pb-0 card-no-border" spanClass="mt-1 mb-0" />
            <CardBody>
              <TicketList />
              <TicketTable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportTicketContainer;
