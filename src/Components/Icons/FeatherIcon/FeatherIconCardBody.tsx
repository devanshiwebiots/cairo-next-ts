import { FeatherIconsData } from "@/Data/Icons";
import { useState } from "react";
import { CardBody, Col, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";

const FeatherIconCardBody = () => {
  const featherIcons = require("feather-icons");
  const [iTag, setiTag] = useState({ iTag: "" });
  const [feathericon, setfeatherIcon] = useState({ feathericon: "" });

  const getItag = (tag: string) => {
    setiTag({ iTag: '<i data-feather="' + tag + '"></i>' });
    setfeatherIcon({ feathericon: tag });
  };
  return (
    <CardBody>
      <Row className="icon-lists feather-icons">
        {FeatherIconsData.map((singleIcon: string, index) => (
          <Col xs="12" sm="6" xl="4" key={index} onClick={(e) => getItag(singleIcon)}>
            <div className="d-flex">
              <div
                dangerouslySetInnerHTML={{
                  __html: featherIcons.icons[singleIcon].toSvg(singleIcon),
                }}
              />
              <div className="flex-grow-1 align-self-center">
                <h6 className="mt-0">{singleIcon}</h6>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <IconMarkUp itag={iTag} icons={feathericon} />
    </CardBody>
  );
};

export default FeatherIconCardBody;
