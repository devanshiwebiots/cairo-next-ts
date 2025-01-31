import { Col, Container, Row } from "reactstrap";
import FileConent from "./FileContent";
import FileSideBar from "./FileSideBar";

const FileManagerContainer = () => {
  return (
    <Container fluid>
      <Row>
        <FileSideBar />
        <Col xl='9' md='12' className="box-col-12">
            <div className="file-content">
                <FileConent />
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FileManagerContainer;
