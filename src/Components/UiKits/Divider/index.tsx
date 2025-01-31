import { Container, Row } from "reactstrap";
import AnimatedColorDivider from "./AnimatedColorDivider";
import HorizontalDashedDivider from "./HorizontalDashedDivider";
import HorizontalDottedDivider from "./HorizontalDottedDivider";
import HorizontalEditableDivider from "./HorizontalEditableDivider";
import HorizontalSolidDivider from "./HorizontalSolidDivider";
import SimpleHorizontalDivider from "./SimpleHorizontalDivider";
import SimpleVerticalDivider from "./SimpleVerticalDivider";
import VerticalDashedDivider from "./VerticalDashedDivider";
import VerticalDottedDivider from "./VerticalDottedDivider";
import VerticalDoubleDivider from "./VerticalDoubleDivider";

const DividerContainer = () => {
  return (
    <Container fluid>
      <Row>
        <HorizontalSolidDivider />
        <HorizontalDashedDivider />
        <HorizontalDottedDivider />
        <VerticalDashedDivider />
        <VerticalDottedDivider />
        <VerticalDoubleDivider />
        <AnimatedColorDivider />
        <HorizontalEditableDivider />
        <SimpleHorizontalDivider />
        <SimpleVerticalDivider />
      </Row>
    </Container>
  );
};

export default DividerContainer;
