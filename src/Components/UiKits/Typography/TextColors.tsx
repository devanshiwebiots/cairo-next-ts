import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { TextColor } from '@/Constant'
import { TextColorData, TextDataColor } from '@/Data/Uikits/typography'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const TextColors = () => {
  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal' style={{minHeight:'430.547px'}}>
        <CommonCardHeader title={TextColor} span={TextColorData} spanClass='mb-0 mt-1' headClass='pb-0'/>
        <CardBody>
          <div className='d-flex flex-column gap-2'>
          <p className="txt-primary mb-0">The <code>"txt-primary"</code> class can be used to create an text like this one.</p>
          {TextDataColor.map(({code }, index) => (
            <p className={`${code} mb-0`} key={index}>{`The`}<code> "{code}"</code> class can be used to create an text like this one.</p>
          ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default TextColors
