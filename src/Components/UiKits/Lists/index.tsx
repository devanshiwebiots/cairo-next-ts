import { Container, Row } from "reactstrap";
import CustomContentLists from "./ CustomContentLists";
import ActiveLists from "./ActiveLists";
import ContextualClasses from "./ContextualClasses";
import DefaultLists from "./DefaultLists";
import DisabledLists from "./DisabledLists";
import FlushLists from "./FlushLists";
import HorizontalLists from "./HorizontalLists";
import JavaScriptBehavior from "./JavaScriptBehavior";
import ListsWithCheckbox from "./ListsWithCheckbox";
import ListsWithNumbers from "./ListsWithNumbers";
import ListsWithRadios from "./ListsWithRadios";
import NumberedBadgeLists from "./NumberedBadgeLists";
import ScrollableLists from "./ScrollableLists";

const ListsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultLists />
        <ActiveLists />
        <FlushLists />
        <ContextualClasses />
        <HorizontalLists />
        <CustomContentLists />
        <ListsWithCheckbox />
        <ListsWithRadios />
        <ListsWithNumbers />
        <JavaScriptBehavior />
        <NumberedBadgeLists />
        <DisabledLists />
        <ScrollableLists />
      </Row>
    </Container>
  );
};

export default ListsContainer;
