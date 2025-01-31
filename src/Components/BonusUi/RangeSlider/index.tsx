import { Container, Row } from "reactstrap";
import DefaultRangeSlider from "./DefaultRangeSlider";
import Disabled from "./Disabled";
import FormatedLabel from "./FormatedLabel";
import MinMaxValue from "./MinMaxValue";
import NegativeValue from "./NegativeValue";
import Prefix from "./Prefix";

const RangeSliderContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultRangeSlider />
        <MinMaxValue />
        <Prefix />
        <NegativeValue />
        <Disabled />
        <FormatedLabel />
      </Row>
    </Container>
  );
};

export default RangeSliderContainer;
