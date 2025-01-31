import { Col, Container, Row } from "reactstrap";
import BlogFilter from "../BlogGrid/BlogFilter";
import CommentsCard from "./CommentsCard";
import LeaveYourComment from "./LeaveYourComment";
import TechnologyAndBusiness from "./TechnologyAndBusiness";

const BlogDetailsContainer = () => {
  return (
    <Container fluid className="blog-detail-page">
      <Row>
        <Col xxl="9" xl="8" className="box-col-12">
          <Row>
            <TechnologyAndBusiness />
            <CommentsCard />
            <LeaveYourComment />
          </Row>
        </Col>
        <BlogFilter />
      </Row>
    </Container>
  );
};

export default BlogDetailsContainer;
