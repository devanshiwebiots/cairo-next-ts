import { Container, Row } from "reactstrap";
import Animation from "./Animation";
import Colors from "./Colors";
import CustomAnimationPlaceholder from "./CustomAnimationPlaceholder";
import PlaceholderCards from "./PlaceholderCards";
import WidthAndSizing from "./Width&Sizing";

const PlaceholdersContainer = () => {
  return (
    <Container fluid>
      <Row>
        <PlaceholderCards />
        <WidthAndSizing />
        <Animation />
        <CustomAnimationPlaceholder />
        <Colors />
      </Row>
    </Container>
  );
};

export default PlaceholdersContainer;
