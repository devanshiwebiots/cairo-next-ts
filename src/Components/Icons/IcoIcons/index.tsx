import { IcoIconData } from "@/Data/Icons";
import { Fragment, useCallback, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import IcoIconCard from "./IcoIconCard";

const IcoIconsContainer = () => {
  const [iTag, setITag] = useState({ iTag: "" });
  const [icon, setIcon] = useState({ icon: "" });

  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="icofont icofont-' + tag + '"></i>',
    });
    setIcon({
      icon: "icofont icofont-" + tag + " fa-2x",
    });
  }, []);
  return (
    <Fragment>
      <Container fluid>
        {IcoIconData.map((item, i) => (
          <Row key={i}>
            <Col sm="12">
              <IcoIconCard iconType={item.icons} title={item.title} parentCallback={callback} />
            </Col>
          </Row>
        ))}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};

export default IcoIconsContainer;
