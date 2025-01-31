import { Container, Row } from "reactstrap";
import AnimatedProgressBars from "./AnimatedProgressBars";
import CustomHeightProgressBars from "./CustomHeightProgressBars";
import CustomProgressBars from "./CustomProgressBars";
import InitialProgressBars from "./InitialProgressBars";
import LargeProgressBars from "./LargeProgressBars";
import MultipleBars from "./MultipleBars";
import ProgressWithNumberSteps from "./ProgressWithNumberSteps";
import SmallProgressBars from "./SmallProgressBars";
import StepProgressbar from "./StepProgressbar";
import StripedProgressBars from "./StripedProgressBars";

const ProgressContainer = () => {
  return (
    <Container fluid>
      <Row>
        <InitialProgressBars />
        <StripedProgressBars />
        <AnimatedProgressBars />
        <MultipleBars />
        <ProgressWithNumberSteps />
        <CustomProgressBars />
        <SmallProgressBars />
        <LargeProgressBars />
        <CustomHeightProgressBars />
        <StepProgressbar />
      </Row>
    </Container>
  );
};

export default ProgressContainer;
