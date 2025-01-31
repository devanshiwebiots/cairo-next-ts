import React from "react";
import { Col, Container, Row } from "reactstrap";
import CourseFilter from "./CourseFilter";
import MainLearningList from "./MainLearningList";
import SmallLearningList from "./SmallLearningList";

const LearningListContainer = () => {
  return (
    <Container fluid>
      <Row className="learning-block">
        <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-12">
          <Row>
            <MainLearningList />
            <SmallLearningList />
          </Row>
        </Col>
        <Col xl='3' className="box-col-12 learning-filter">
            <CourseFilter />
        </Col>
      </Row>
    </Container>
  );
};

export default LearningListContainer;
