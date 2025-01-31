import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MultipleCollapseAccordions } from "@/Constant";
import { MultipleCollapseAccordionSpan } from "@/Data/Uikits/Accordion";
import { useState } from "react";
import { Card, CardBody, Col, Collapse, Row } from "reactstrap";
import CollapseButtons from "./CollapseButtons";

const MultipleCollapseAccordion = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const toggleFirst = () => setOpenFirst(!openFirst);
  const toggleSecond = () => setOpenSecond(!openSecond);
  const toggleBoth = () => {
    setOpenFirst(!openFirst);
    setOpenSecond(!openSecond);
  };

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={MultipleCollapseAccordions} span={MultipleCollapseAccordionSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <CollapseButtons toggleFirst={toggleFirst} toggleSecond={toggleSecond} toggleBoth={toggleBoth} openFirst={openFirst} openSecond={openSecond} />
          <Row className="d-flex">
            <Col xl="6">
              <Collapse isOpen={openFirst} className="multi-collapse dark-accordion">
                <Card className="card-body mt-3 mb-0 collapse-wrapper accordion-light-primary">The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the height from its current value to 0. Given how CSS handles animations, you cannot use padding on a .collapse element. Instead, use the class as an independent wrapping element.</Card>
              </Collapse>
            </Col>
            <Col xl="6">
              <Collapse isOpen={openSecond} className="multi-collapse dark-accordion">
                <Card className="card-body mt-3 mb-0 collapse-wrapper accordion-light-warning">This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</Card>
              </Collapse>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleCollapseAccordion;
