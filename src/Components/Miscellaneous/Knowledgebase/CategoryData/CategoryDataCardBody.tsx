import { Href } from "@/Constant";
import { KnowledgeBaseData } from "@/Data/Knowledgebase";
import Link from "next/link";
import { Archive, ArrowRight, FileText } from "react-feather";
import { Badge, CardBody, Col, Row } from "reactstrap";

const CategoryDataCardBody = () => {
  return (
    <CardBody>
      <Row className="browse g-sm-4 g-3">
        {KnowledgeBaseData.map((data, i) => (
          <Col xl="4" md="6" key={data.id} className="xl-50">
            <div className="browse-articles">
              <h5>
                <span>
                  <Archive className="feather feather-archive" />
                </span>
                {data.title}
              </h5>
              <ul>
                {data.knowledgeList &&
                  data.knowledgeList.map((data, index) => (
                    <li key={index} className="border-0">
                      <Link href={Href}>
                        {data.fileTextIcon ? (
                          <span>
                            <FileText />
                          </span>
                        ) : (
                          <span>
                            <ArrowRight />
                          </span>
                        )}
                        <span>{data.text}</span>
                        {data.badge ? (
                          <Badge color="primary" className="pull-right">
                            {data.badge}
                          </Badge>
                        ) : (
                          ""
                        )}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};

export default CategoryDataCardBody;
