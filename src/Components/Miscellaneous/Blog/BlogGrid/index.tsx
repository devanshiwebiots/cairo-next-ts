import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import BlogFilter from "./BlogFilter";
import GridCards from "./GridCards";
import LatestNewsAndTrends from "./LatestNewsAndTrends";

const BlogGridContainer = () => {
  return (
    <Container fluid className="blog-grid-page">
      <Row>
        <Col xxl="9" xl="8" className="box-col-12">
          <Row>
            <GridCards />
            <LatestNewsAndTrends />
          </Row>
        </Col>
          <BlogFilter />
      </Row>
    </Container>
  );
};

export default BlogGridContainer;
