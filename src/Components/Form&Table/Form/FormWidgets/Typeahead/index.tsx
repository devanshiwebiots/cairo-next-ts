import { Container, Row } from "reactstrap";
import BasicTypeAhead from "./BasicTypeAhead";
import BloodHound from "./BloodHound";
import CustomTemplates from "./CustomTemplates";
import MultipleSectionsWithHeaders from "./MultipleSectionsWithHeaders";
import PreFetch from "./PreFetch";
import RemoteTypeAhead from "./RemoteTypeAhead";
import RtlSupport from "./RtlSupport";
import ScrollableDropdownMenu from "./ScrollableDropdownMenu";

const TypeaheadContainer = () => {
  return (
    <Container fluid>
      <div className="typeahead typeahead-wrapper">
        <Row>
          <BasicTypeAhead />
          <PreFetch />
          <BloodHound />
          <RemoteTypeAhead />
          <CustomTemplates />
          <MultipleSectionsWithHeaders />
          <ScrollableDropdownMenu />
          <RtlSupport />
        </Row>
      </div>
    </Container>
  );
};

export default TypeaheadContainer;
