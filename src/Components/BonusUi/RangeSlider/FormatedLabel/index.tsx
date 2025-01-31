import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FormattedLabels } from '@/Constant'
import { Card, CardBody, Col } from 'reactstrap'
import FormatedLabelForm from './FormatedLabelForm'

const FormatedLabel = () => {
  return (
     <Col lg='6'>
        <Card>
            <CommonCardHeader title={FormattedLabels} headClass='pb-0'/>
            <CardBody>
                <FormatedLabelForm />
            </CardBody>
        </Card>
     </Col>
  )
}

export default FormatedLabel
