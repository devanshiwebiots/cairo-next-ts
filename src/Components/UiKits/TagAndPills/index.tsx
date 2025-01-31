import { Container, Row } from "reactstrap";
import BadgeHeadings from "./BadgeHeadings";
import BadgesContextualVariations from "./BadgesContextualVariations";
import BadgesOutlineContextualVariations from "./BadgesOutlineContextualVariations";
import BadgeTagWithIcons from "./BadgeTagWithIcons";
import CloseBadges from "./CloseBadges";
import ImageBadges from "./ImageBadges";
import ImageWithCloseBadges from "./ImageWithCloseBadges";
import NumberOfBadges from "./NumberOfBadges";
import NumberOfPillBadges from "./NumberOfPillBadges";
import PillContextualVariations from "./PillContextualVariations";
import PillOutlineVariations from "./PillOutlineVariations";
import PositionedBadges from "./PositionedBadges.tsx";
import RoundedPillsWithIcons from "./RoundedPillsWithIcons";

const TagAndPillsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BadgesContextualVariations />
        <BadgesOutlineContextualVariations />
        <PillContextualVariations />
        <PillOutlineVariations />
        <NumberOfBadges />
        <NumberOfPillBadges />
        <BadgeTagWithIcons />
        <RoundedPillsWithIcons />
        <BadgeHeadings />
        <PositionedBadges />
        <ImageBadges />
        <CloseBadges />
        <ImageWithCloseBadges />
      </Row>
    </Container>
  );
};

export default TagAndPillsContainer;
