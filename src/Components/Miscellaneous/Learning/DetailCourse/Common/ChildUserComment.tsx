import { ImagePath } from "@/Constant";
import { SingleBlogParagraphs } from "@/Data/Learning";
import Image from "next/image";
import { Col, Row } from "reactstrap";

export const ChildUserComment = () => {
  return (
    <li>
      <ul className="ms-5">
        <li>
          <div className="d-flex">
            <Image className="align-self-center" src={`${ImagePath}/blog/9.jpg`} alt="Generic placeholder image" width={74} height={74} />
            <div className="flex-grow-1">
              <Row>
                <Col xl="12">
                  <h6 className="blog-title mt-0">
                    JolioMark<span> ( Designer )</span>
                  </h6>
                </Col>
              </Row>
              <p>{SingleBlogParagraphs}</p>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};
