import { Container, Row } from "reactstrap";
import BlockQuotsCart from "./BlockQuotsCart";
import ColoredHeading from "./ColoreHeadings";
import DisplayCart from "./DisplayCart";
import FontWeight from "./FontWeight";
import HeadingCard from "./HeadingCard";
import InlineTextElements from "./InlineTextElements";
import ListingsTypography from "./ListingTypography";
import TextColors from "./TextColors";

const TypographyContainer = () => {
  return (
    <Container fluid>
      <Row>
        <HeadingCard />
        <ColoredHeading />
        <FontWeight />
        <ListingsTypography />
        <DisplayCart />
        <InlineTextElements />
        <TextColors />
        <BlockQuotsCart />
      </Row>
    </Container>
  );
};

export default TypographyContainer;
