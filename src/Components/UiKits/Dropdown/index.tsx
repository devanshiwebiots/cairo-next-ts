import { Container, Row } from "reactstrap";
import AlignmentOptions from "./AlignmentOptions";
import BasicDropdown from "./BasicDropdown";
import DarkDropdown from "./DarkDropdown";
import DividerDropdown from "./DividerDropdown";
import HeadingDropdown from "./HeadingDropdown";
import HelperCard from "./HelperCard";
import JustifyContents from "./JustifyContents";
import RoundedDropdown from "./RoundedDropdown";
import SplitDropdown from "./SplitDropdown";
import UniqueDropdown from "./UniqueDropdown";
import WithInputType from "./WithInputType";

const DropdownContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicDropdown />
        <RoundedDropdown />
        <SplitDropdown />
        <HeadingDropdown />
        <WithInputType />
        <DarkDropdown />
        <UniqueDropdown />
        <JustifyContents />
        <AlignmentOptions />
        <HelperCard />
        <DividerDropdown />
      </Row>
    </Container>
  );
};

export default DropdownContainer;
