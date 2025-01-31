import RatioImage from "@/CommonComponent/RatioImage";
import { Comment, ImagePath } from "@/Constant";
import { LearningCommentFour, LearningCommentOne, LearningCommentThird } from "@/Data/Learning";
import { Card, CardBody } from "reactstrap";
import BlogDetails from "./BlogDetails";
import UserComment from "./Common/UserComment";

const BlogSingle = () => {
  return (
    <Card>
      <CardBody>
        <div className="blog-single">
          <div className="blog-box blog-details">
            <RatioImage className="img-fluid w-100" src={`${ImagePath}/faq/learning-1.png`} alt="blog-main" />
            <BlogDetails />
          </div>
          <section className="comment-box">
            <h4>{Comment}</h4>
            <hr />
            <ul>
              <UserComment ImageSrc="comment.jpg" userReplay text={LearningCommentOne} />
              <UserComment ImageSrc="4.jpg" text={LearningCommentThird} />
              <UserComment ImageSrc="12.png" text={LearningCommentFour} />
            </ul>
          </section>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogSingle;
