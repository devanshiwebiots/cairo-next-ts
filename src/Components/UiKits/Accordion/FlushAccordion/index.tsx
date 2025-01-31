import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent"
import { FlushAccordions } from "@/Constant"
import { FlushAccordionData, FlushAccordionSpan } from "@/Data/Uikits/Accordion"
import { useState } from "react"
import { Accordion, Card, CardBody, Col } from "reactstrap"
import CommonAccordionItem from "../Common/CommonAccrodion"

const FlushAccordion = () => {
    const [open, setOpen] = useState("1");

    const toggle = (id: any) => {
        if (open === id) {
            setOpen("");
        } else {
            setOpen(id);
        }
    };
    return(
        <Col sm='12' xl='6'>
            <Card className="height-equal" style={{minHeight:'285.203px'}}>
                <CommonUIkitsComponent title={FlushAccordions} span={FlushAccordionSpan} spanClass="mt-1 mb-0" headClass="pb-0"/>
                <CardBody>
                <Accordion open={open} toggle={toggle} className="dark-accordion" id='simpleaccordion'>
                        {FlushAccordionData.map((item, index) => (
                            <CommonAccordionItem item={item} key={index} />
                        ))}
                    </Accordion>
                </CardBody>
            </Card>
        </Col>
    )
}

export default FlushAccordion