import { Container, Row } from "reactstrap";
import BasicCard from "./BasicCard";
import DarkColorCard from "./DarkColorCard";
import FlatCard from "./FlatCard";
import IconInHeading from "./IconInHeading";
import InfoColorBody from "./InfoColorBody";
import InfoColorFooters from "./InfoColorFooters";
import InfoColorHeader from "./InfoColorHeader";
import WithoutShadowCard from "./WithoutShadowCard";

const BasicCardsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicCard />
        <FlatCard />
        <WithoutShadowCard />
        <IconInHeading />
        <DarkColorCard />
        <InfoColorHeader />
        <InfoColorBody />
        <InfoColorFooters />
      </Row>
    </Container>
  );
};

export default BasicCardsContainer;
