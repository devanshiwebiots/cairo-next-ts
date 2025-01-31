import { Container, Row } from "reactstrap";
import DefaultPagination from "./DefaultPagination";
import PaginationActiveAndDisabled from "./PaginationActiveAndDisabled";
import PaginationAlignment from "./PaginationAlignment";
import PaginationSizing from "./PaginationSizing";
import PaginationWithIcons from "./PaginationWithIcons";
import RoundedPagination from "./RoundedPagination";

const PaginationContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultPagination />
        <PaginationActiveAndDisabled />
        <PaginationWithIcons />
        <RoundedPagination />
        <PaginationAlignment />
        <PaginationSizing />
      </Row>
    </Container>
  );
};

export default PaginationContainer;
