import { Container, Row } from "reactstrap";
import BackgroundColors from "./BackgroundColors";
import BorderColor from "./BorderColor";
import DashedBorder from "./BorderPart/DashedBorder";
import DottedBorder from "./BorderPart/DottedBorder";
import GrooveBorder from "./BorderPart/GrooveBorder";
import RidgeBorder from "./BorderPart/RidgeBorder";
import FontSizes from "./FontSizes";
import FontStyle from "./FontStyle";
import FontWeight from "./FontWeight";
import ImagesSizes from "./ImagesSizes";
import Margins from "./Margins";
import OneSideMargin from "./OneSideMargin";
import OneSidePadding from "./OneSidePadding";
import Padding from "./Padding";
import StyledBorders from "./StyledBorders";
import TextColors from "./TextColors";
import VariationBordersAndDisplays from "./VariationBorders&Displays";

const HelperClassesContainer = () => {
  return (
    <Container fluid>
      <Row>
        <StyledBorders />
        <VariationBordersAndDisplays />
        <BackgroundColors />
        <BorderColor />
        <ImagesSizes />
        <FontStyle />
        <FontWeight />
        <TextColors />
        <Padding />
        <DashedBorder />
        <DottedBorder />
        <GrooveBorder />
        <RidgeBorder />
        <OneSidePadding />
        <Margins />
        <OneSideMargin />
        <FontSizes />
      </Row>
    </Container>
  );
};

export default HelperClassesContainer;
