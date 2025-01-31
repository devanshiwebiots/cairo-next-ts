import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Href, Linkunderlines } from '@/Constant'
import { LinkUnderlinesData, LinkUnderlinesSpan } from '@/Data/Uikits/NavigateLinks'
import Link from 'next/link'
import { Card, CardBody, Col } from 'reactstrap'

const LinkUnderlines = () => {
  return (
    <Col xxl='3' sm='6'>
        <Card className='height-equal'  style={{minHeight:'485.391px'}}>
            <CommonUIkitsComponent title={Linkunderlines} span={LinkUnderlinesSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                {LinkUnderlinesData.map(({color, text}, index) => (
                    <p key={index}>
                        <Link href={Href} className={`link-underline-${color}`}>{text} underline</Link>
                    </p>
                ))}
            </CardBody>
        </Card>
    </Col>
  )
}

export default LinkUnderlines
