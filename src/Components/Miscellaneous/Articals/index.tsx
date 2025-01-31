import { ArticalData } from "@/Data/Articals";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";

const Articals = () => {
  return (
    <Fragment>
      {ArticalData.map((data, i) => (
        <Col xl="4" md="6" sm={data.sm} key={i} className={`"box-col-${data.box}`}>
          <Card className="bg-primary articles-cards">
            <CardBody>
              <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <h4>{data.title}</h4>
                  <p>{data.paragraph}</p>
                </div>
                {data.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default Articals;
