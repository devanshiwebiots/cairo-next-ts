import { Container, Row } from "reactstrap";
import ColoredBreadcrumb from "./ColoredBreadcrumb";
import DefaultBreadcrumb from "./DefaultBreadcrumb";
import DividerBreadcrumb from "./DividerBreadcrumb";
import VariationOfBreadcrumb from "./VariationOfBreadcrumb";
import WithIconsBreadcrumb from "./WithIconsBreadcrumb";

const BreadcrumbContainer = () => {
  return (
    <Container fluid>
      <Row className="default-breadcrumb">
        <DefaultBreadcrumb />
        <DividerBreadcrumb />
        <WithIconsBreadcrumb />
        <VariationOfBreadcrumb />
        <ColoredBreadcrumb />
      </Row>
    </Container>
  );
};

export default BreadcrumbContainer;
