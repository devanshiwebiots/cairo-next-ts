import { Container, Row } from "reactstrap";
import AbsolutePrimaryCard from "./AbsolutePrimaryCard";
import AbsoluteSecondaryCard from "./AbsoluteSecondaryCard";
import AddTitleOfCard from "./AddTitleOfCard";
import AddTitleOfCardThrid from "./AddTitleOfCardThrid";
import AddTitleOfCardTwo from "./AddTitleOfCardTwo";
import BorderBottom from "./BorderBottom";
import BorderLeft from "./BorderLeft";
import BorderPrimaryState from "./BorderPrimaryState";
import BorderRight from "./BorderRight";
import BorderSecondaryState from "./BorderSecondaryState";
import BorderTop from "./BorderTop";
import BorderWarningState from "./BorderWarningState";

const CreativeCardsContainer = () => {
  return (
    <Container fluid>
      <Row className="effective-card">
        <AddTitleOfCard />
        <AddTitleOfCardTwo />
        <AddTitleOfCardThrid />
        <BorderLeft />
        <BorderRight />
        <BorderTop />
        <BorderBottom />
        <BorderPrimaryState />
        <BorderWarningState />
        <BorderSecondaryState />
        <AbsolutePrimaryCard />
        <AbsoluteSecondaryCard />
      </Row>
    </Container>
  );
};

export default CreativeCardsContainer;
