import CommonCardHeader from "@/CommonComponent/CommonCardHeader"
import { NegativeValues } from "@/Constant"
import { Card, CardBody, Col } from "reactstrap"
import NegativeValueForm from "./NegativeValueForm"

const NegativeValue = () => {
    return(
      <Col lg='6'>
        <Card>
            <CommonCardHeader title={NegativeValues} headClass='pb-0'/>
            <CardBody>
                <NegativeValueForm />
            </CardBody>
        </Card>
      </Col>
    )
}

export default NegativeValue