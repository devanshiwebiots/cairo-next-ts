import { FontAwesomeData } from "@/Data/Icons";
import { Fragment, useCallback, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import FontAwsomeCard from "./FontAwsomeCard";

const FontAwsomeContainer = () => {
  const [iTag, setITag] = useState({ iTag: "" });
  const [icon, setIcon] = useState({ icon: "" });
  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="fa fa-' + tag + '"></i>',
    });
    setIcon({
      icon: "fa fa-" + tag + " fa-2x",
    });
  }, []);
  return (
    <Fragment>
      <Container fluid>
        {FontAwesomeData.map((icons, index) => {
          return (
            <Row key={index}>
              <Col sm="12">
                <FontAwsomeCard iconType={icons.data} title={icons.title} parentCallback={callback} />
              </Col>
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};

export default FontAwsomeContainer;
