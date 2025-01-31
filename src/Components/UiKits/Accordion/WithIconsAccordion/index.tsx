import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent"
import { WithIconsAccordions } from "@/Constant"
import { WithIconsAccordionData, WithIconsAccordionSpan } from "@/Data/Uikits/Accordion"
import { useState } from "react"
import { Accordion, Card, CardBody, Col } from "reactstrap"
import CommonAccordionItem from "../Common/CommonAccrodion"

const WithIconsAccordion = () => {
    const [open, setOpen] = useState("");

    const toggle = (id: any) => {
        if (open === id) {
            setOpen("");
        } else {
            setOpen(id);
        }
    };
    return(
        <Col xl='6' sm='12'>
            <Card>
                <CommonUIkitsComponent title={WithIconsAccordions} span={WithIconsAccordionSpan} spanClass="mt-1 mb-0" headClass="pb-0"/>
                <CardBody className="accordion-border icons-accordion">
                <Accordion open={open} toggle={toggle} className="dark-accordion" id='simpleaccordion'>
                        {WithIconsAccordionData.map((item, index) => (
                           <CommonAccordionItem item={item} key={index}/>
                        ))}
                    </Accordion>
                </CardBody>
            </Card>
        </Col>
    )
}

export default WithIconsAccordion