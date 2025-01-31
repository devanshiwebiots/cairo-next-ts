import { Col, Container, Row } from "reactstrap";
import { ProjectListHead } from "./ProjectListHead";
import ProjectListTabContent from "./ProjectListTabContent";

const ProjectListContainer = () => {
  return (
    <div>   
    <Container fluid>
      <Row className="project-cards">
        <Col md="12" className="project-list">
          <ProjectListHead />
        </Col>
        <Col sm="12">
          <ProjectListTabContent />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ProjectListContainer;
