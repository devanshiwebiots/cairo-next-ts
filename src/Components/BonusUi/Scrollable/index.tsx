import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import BadgesScrollbar from "./BadgesScrollbar";
import BothSideVisibleScrollbar from "./BothSideVisibleScrollbar";
import CustomScrollbar from "./CustomScrollbars";
import HorizontalScrollbar from "./HorizontalScrollbar";
import ProfileScrollable from "./ProfileScrollable";
import ScrollableContent from "./ScrollableContent";
import SmallSizeScrollbar from "./SmallSizeScrollbar";

const ScrollableContainer = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <CustomScrollbar />
          <SmallSizeScrollbar />
          <BadgesScrollbar />
          <ProfileScrollable />
          <ScrollableContent />
          <HorizontalScrollbar />
          <BothSideVisibleScrollbar />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ScrollableContainer;
