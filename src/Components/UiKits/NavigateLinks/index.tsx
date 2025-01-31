import { Container, Row } from "reactstrap";
import BackgroundColorOpacity from "./BackgroundColorOpacity";
import BorderOpacity from "./BorderOpacity";
import CommonLinks from "./CommonLinks";
import LinkUnderlines from "./LinkUnderlines";
import LinkUtilities from "./LinkUtilities";

const NavigateLinksContainer = () => {
  return (
    <Container fluid>
      <Row>
        <LinkUtilities />
        <LinkUnderlines />
        <BorderOpacity />
        <BackgroundColorOpacity />
        <CommonLinks />
      </Row>
    </Container>
  );
};

export default NavigateLinksContainer;
