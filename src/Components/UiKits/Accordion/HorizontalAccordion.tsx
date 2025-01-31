import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent"
import { HorizontalAccordions, Togglewidthcollapse } from "@/Constant"
import { HorizontalAccordionSpan } from "@/Data/Uikits/Accordion"
import { useState } from "react"
import { Button, Card, CardBody, Col, Collapse, Row } from "reactstrap"

export const HorizontalAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
      <Col md='6' sm='12'>
        <Card>
            <CommonUIkitsComponent title={HorizontalAccordions} span={HorizontalAccordionSpan} headClass="pb-0" spanClass="mt-1 mb-0"/>
            <CardBody className="collapse-accordion">
                <div className="common-flex mb-0">
                <Button color="secondary" onClick={toggle}>{Togglewidthcollapse}</Button>
                </div>
                <Row>
            <Col sm="5">
              <Collapse isOpen={isOpen} horizontal className="mt-3">
                <Card className="bg-light-secondary accordion-h-space mb-0 text-dark card-body">
                  The collapse plugin also supports horizontal collapsing. Add the .collapse-horizontal modifier class to transition the width instead of height and set a width on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our width utilities.
                </Card>
              </Collapse>
            </Col>
          </Row>
            </CardBody>
        </Card>
      </Col>
    )
}

export default HorizontalAccordion