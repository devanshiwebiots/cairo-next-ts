import { Container, Row } from "reactstrap";
import AutoPlayVariant from "./AutoPlayVariant";
import CrossFade from "./CrossFade";
import DarkVariant from "./DarkVariant";
import DisableTouchSwiping from "./DisableTouchSwiping";
import IndividualInterval from "./IndividualInterval";
import SlidesOnly from "./SlidesOnly";
import WithCaptions from "./WithCaptions";
import WithControls from "./WithControls";
import WithIndicators from "./WithIndicators";

const ReactstrapCarouselContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SlidesOnly />
        <WithControls />
        <WithIndicators />
        <WithCaptions />
        <CrossFade />
        <IndividualInterval />
        <DisableTouchSwiping />
        <DarkVariant />
        <AutoPlayVariant />
      </Row>
    </Container>
  );
};

export default ReactstrapCarouselContainer;
