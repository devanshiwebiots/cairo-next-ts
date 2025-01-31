import { useState } from "react";
import { Container, Row } from "reactstrap";
import EmailRightSide from "./EmailRightSide";
import EmailSiderbar from "./EmailSidebar";

const LatterBoxContainer = () => {
  const [navId, setNavId] = useState("1");
  return (
    <Container fluid>
      <div className="email-wrap email-main-wrapper">
        <Row>
          <EmailSiderbar navId={navId} setNavId={setNavId} />
          <EmailRightSide navId={navId} />
        </Row>
      </div>
    </Container>
  );
};

export default LatterBoxContainer;
