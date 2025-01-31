import { Container, Row } from "reactstrap";
import AnimatedHeartRating from "./AnimatedHeartRating";
import AnimatedRating from "./AnimatedRating";
import HalfStarRating from "./HalfStarRating";
import ResetRating from "./ResetRating";
import StarRating from "./StarRating";
import StrokeStarRating from "./StrokeStarRating";

const RatingContainer = () => {
  return (
    <Container fluid>
      <Row>
        <StarRating />
        <StrokeStarRating />
        <ResetRating />
        <HalfStarRating />
        <AnimatedRating />
        <AnimatedHeartRating />
      </Row>
    </Container>
  );
};

export default RatingContainer;
