import CommonCardHeader from "@/CommonComponent/CommonCardHeader"
import { Prefixs } from "@/Constant"
import { Card, CardBody, Col } from "reactstrap"
import PrefixForm from "./PrefixForm"

export const Prefix = () => {
    return(
     <Col lg='6'>
        <Card>
            <CommonCardHeader title={Prefixs} headClass="pb-0"/>
            <CardBody>
                <PrefixForm />
            </CardBody>
        </Card>
     </Col>
    )
}

export default Prefix