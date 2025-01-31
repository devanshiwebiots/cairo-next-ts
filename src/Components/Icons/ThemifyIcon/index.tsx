import { ThemifyIconData } from "@/Data/Icons";
import { Fragment, useCallback, useState } from "react";
import { Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import ThemifyIconCard from "./ThemifyIconCard";

const ThemifyIconContainer = () => {
  const [iTag, setITag] = useState({ iTag: "" });
  const [icon, setIcon] = useState({ icon: "" });

  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="' + tag + '"></i>',
    });
    setIcon({
      icon: "" + tag + " fa-2x",
    });
  }, []);
  return (
    <Fragment>
      <Container fluid>
        {ThemifyIconData.map((item, i) => (
          <Row key={i}>
            <ThemifyIconCard iconType={item.data} title={item.title} parentCallback={callback} />
          </Row>
        ))}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};

export default ThemifyIconContainer;
