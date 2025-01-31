import React, { Fragment, useRef } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import InvoiceSixHeader from './InvoiceSixHeader'
import InvoiceSixTable from './InvoiceSixTable'
import UserDetails from './UserDetails'
import InvoiceFooterButton from './InvoiceFooterButton'
import { useReactToPrint } from 'react-to-print'

const Invoice6Container = () => {
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  return (
    <Fragment>
     <Container>
        <Row>
            <Col sm='12'>
            <div ref={componentRef}>

                <Card>
                    <CardBody>
                        <div className='invoice'>
                            <div>
                                <InvoiceSixHeader />
                                <hr />
                                <UserDetails />
                                <InvoiceSixTable />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            </Col>
        </Row>
     </Container>
     <InvoiceFooterButton handlePrint={handlePrint} />

    </Fragment>
  )
}

export default Invoice6Container
