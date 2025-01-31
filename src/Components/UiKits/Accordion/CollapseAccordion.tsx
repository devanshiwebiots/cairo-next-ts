import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent"
import { ButtonWithDataBsTarget, CollapseAccordions, LinkwithHref } from "@/Constant"
import { AccordionCollapSpan } from "@/Data/Uikits/Accordion"
import { useState } from "react"
import { Button, Card, CardBody, Col, Collapse } from "reactstrap"

export const CollapseAccordion = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <Col md='6' sm='12'>
            <Card>
                <CommonUIkitsComponent title={CollapseAccordions} span={AccordionCollapSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
                <CardBody className="collapse-accordion">
                    <p className="common-flex">
                        <Button color="dark" onClick={toggle}>{LinkwithHref}</Button>
                        <Button color="dark" onClick={toggle}>{ButtonWithDataBsTarget}</Button>
                    </p>
                    <Collapse isOpen={isOpen}>
                        <Card color="dark" className="mb-0 dark-accordion">
                            <CardBody>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</CardBody>
                        </Card>
                    </Collapse>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CollapseAccordion