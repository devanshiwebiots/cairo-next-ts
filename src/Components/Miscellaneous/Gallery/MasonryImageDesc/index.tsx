import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MasonryGalleryDescriptionCap } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import MasonryGalleryDescBody from "./MasonryGalleryDescBody";

const MasonryImageDescContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card>
            <CommonCardHeader title={MasonryGalleryDescriptionCap} headClass="pb-0" />
            <CardBody className="photoswipe-pb-responsive">
              <MasonryGalleryDescBody />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MasonryImageDescContainer;
