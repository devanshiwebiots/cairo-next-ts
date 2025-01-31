import { ArticlesData } from "@/Data/FAQ";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";

const Articles = () => {
  return (
    <Fragment>
      {ArticlesData.map(({ title, description, icon, md }, index) => (
        <Col xl="4" md={md} key={index}>
          <Card className="bg-primary articles-cards">
            <CardBody>
              <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
                {icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default Articles;
