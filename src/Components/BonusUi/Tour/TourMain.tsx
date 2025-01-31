import { useTour } from "@reactour/tour";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import UserProfileFirstStyle from "./UserProfileFirstStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle";

const TourMain = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
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
