import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BorderLefts } from '@/Constant'
import { BorderLeftData } from '@/Data/BonusUi/CreativeCards'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BorderLeft = () => {
  return (
    <Col md='6' className='col-12'>
        <Card className='common-hover'>
            <CommonCardHeader title={BorderLefts} span={BorderLeftData} headClass='pb-0  border-l-primary' spanClass='mt-1 mb-0'/>
            <CardBody>
              <p className='lh-base'>You can design your creative card by taking only the <strong>border-l-primary </strong> class.
                      If you want to use other colors like this: <strong>border-l-*</strong><br /> <strong>Visit Us: </strong>	2600 Hollywood Blvd,Florida, United States-	33020<br /><strong>Mail Us:</strong>  contact@us@gmail.com<br /><strong>Contact Number: </strong>  (954) 357-7760</p>
            </CardBody>
        </Card>
    </Col>
  )
}

export default BorderLeft
