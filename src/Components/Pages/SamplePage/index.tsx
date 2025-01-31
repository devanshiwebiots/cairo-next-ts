import { Container, Row } from "reactstrap";
import SampleCard from "./SampleCard";

const SamplePageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SampleCard />
      </Row>
    </Container>
  );
};

export default SamplePageContainer;
