import { Container, Row } from "reactstrap";
import AnimatedTimeline from "./AnimatedTimeline";
import BasicTimeline from "./BasicTimeline";
import HalfRoundedTimeline from "./HalfRoundedTimeline";
import HorizontalTimeline from "./HorizontalTimeline";
import HoveringTimeline from "./HoveringTimeline";
import VariationTimeline from "./VariationTimeline";

const TimelineContainer = () => {
  return (
    <Container fluid>
      <Row>
        <AnimatedTimeline />
        <BasicTimeline />
        <HoveringTimeline />
        <VariationTimeline />
        <HorizontalTimeline />
        <HalfRoundedTimeline />
      </Row>
    </Container>
  );
};

export default TimelineContainer;
