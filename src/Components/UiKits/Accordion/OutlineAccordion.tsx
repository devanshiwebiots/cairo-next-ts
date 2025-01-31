import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent"
import { OutlineAccordions } from "@/Constant"
import { OutlineAccordionData, OutlineAccordionSpan } from "@/Data/Uikits/Accordion"
import { useState } from "react"
import { Accordion, Card, CardBody, Col } from "reactstrap"
import CommonAccordionItem from "./Common/CommonAccrodion"

export const OutlineAccordion = () => {
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
                <CommonUIkitsComponent title={OutlineAccordions} headClass="pb-0" span={OutlineAccordionSpan} spanClass="mt-1 mb-0"/>
                <CardBody>
                <Accordion open={open} toggle={toggle} className="dark-accordion" id='simpleaccordion'>
                        {OutlineAccordionData.map((item, index) => (
                            <CommonAccordionItem item={item} key={index} />
                        ))}
                    </Accordion>
                </CardBody>
            </Card> 
        </Col>
    )
}

export default OutlineAccordion