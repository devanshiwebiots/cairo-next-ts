import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SampleCards } from "@/Constant";
import { SampleCardData } from "@/Data/Pages/SamplePage";
import { Card, CardBody, Col } from "reactstrap";

const SampleCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={SampleCards} headClass="pb-0" span={SampleCardData} spanClass="mt-1 mb-0" />
        <CardBody>
          <p>
            <strong>Web Design Trends: </strong> Stay up-to-date with the latest trends in web design, such as the use of animations, micro-interactions, dark mode, and unique navigation techniques.Keep your website's navigation simple and intuitive, allowing users to find what they need easily without overwhelming them with options.
          </p>
          <p>
            <strong>Design Tools: </strong> Information on popular design software like Adobe Photoshop, Sketch, Figma, or Adobe XD, along with tips and tricks for efficient workflow and collaboration.Compress and optimize images to improve website loading speed and overall performance, providing a better user experience.
          </p>
          <p>
            <strong>Front-End Development: </strong> A basic understanding of HTML, CSS, and JavaScript can enhance your web design skills, enabling you to create interactive and dynamic elements.Ensure sufficient contrast between text and background colors to enhance readability and accessibility, especially for users with visual impairments.
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SampleCard;
