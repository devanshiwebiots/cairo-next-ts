import { CairoTheme } from "@/Constant";
import { CommonCardProp } from "@/Types/BonusUiType";
import { Fragment } from "react";
import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";

const CommonCard :React.FC<CommonCardProp>= ({ data }) => {
  return (
    <Fragment>
      <Col xl="4" sm={data.sm}>
        <Card className="height-equal">
          <CardHeader className={data.headerClass}>
            <h4 className={`${data.headingClass}`} >{data.title}</h4>
          </CardHeader>
          <CardBody className={data.bodyClass}>
            <h5 className={`pb-2  ${data.titleColor}`}>{data.text}</h5>
            <p className="mb-0">{data.span}</p>
          </CardBody>
          <CardFooter className={data.footerClass}>
            <h6 className={`mb-0 text-end ${data.footerColor}`}>{CairoTheme}</h6>
          </CardFooter>
        </Card>
      </Col>
    </Fragment>
  );
};

export default CommonCard;
