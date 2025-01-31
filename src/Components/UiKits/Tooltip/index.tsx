import { Container, Row } from "reactstrap";
import BasicTooltip from "./BasicTooltip";
import ColoredTooltip from "./ColoredTooltip";
import ElementsWithHoverEffect from "./ElementsWithHoverEffect";
import FilledTooltip from "./FilledTooltip";
import TooltipDirections from "./TooltipDirections";

const TooltipContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicTooltip />
        <ColoredTooltip />
        <TooltipDirections />
        <ElementsWithHoverEffect />
        <FilledTooltip />
      </Row>
    </Container>
  );
};

export default TooltipContainer;
