import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import UserProfileFirstStyle from "./UserProfileFirstStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle";

const TourMain = () => {
   return (
      <Container fluid>
        <div className="user-profile">
          <Row>
            <UserProfileFirstStyle />
            <UserProfileSecondStyle />
          </Row>
        </div>
      </Container>
  );
};

export default TourMain;
