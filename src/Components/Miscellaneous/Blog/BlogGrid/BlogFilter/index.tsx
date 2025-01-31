import { Button, Col, Row } from "reactstrap";
import FollowUsCard from "./FollowUsCard";
import PopularTags from "./PopularTags";
import RecentPosts from "./RecentPosts";
import SearchCard from "./SearchCard";
import Subscriber from "./Subscriber";
import TrendingPosts from "./TrendingPosts";

const BlogFilter = () => {
  return (
    <Col xxl="3" xl="4" className="blog-filter">
      <div className="md-sidebar">
        <Button color="primary" className="email-aside-toggle md-sidebar-toggle">
          Blog Filter
        </Button>
        <div className="md-sidebar-aside job-sidebar custom-scrollbar">
          <Row className="blog-sidebar">
            <SearchCard />
            <TrendingPosts />
            <FollowUsCard />
            <RecentPosts />
            <PopularTags />
            <Subscriber />
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default BlogFilter;
