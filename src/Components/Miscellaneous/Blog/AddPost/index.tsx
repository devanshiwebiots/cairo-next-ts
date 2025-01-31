import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BlogDiscardButton, BlogPostButton, PostEdit } from "@/Constant";
import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import DropzoneClass from "./DropzoneClass";
import FormPost from "./FormPost";

const AddPostContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card className="custom-post-edit">
            <CommonCardHeader title={PostEdit} headClass="pb-0" />
            <CardBody className="add-post">
              <FormPost />
              <DropzoneClass />
              <div className="btn-showcase text-end">
                <Button color="primary">{BlogPostButton}</Button>
                <Button color="light" type="reset">
                  {BlogDiscardButton}
                </Button>
              </div> 
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPostContainer;
