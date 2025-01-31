import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath, ProjectDescription } from '@/Constant'
import { Col, Row } from 'reactstrap'

const UserDetails = () => {
  return (
    <Row>
        <Col md='4'>
            <div className='d-flex'>
                <div className='media-left'>
                    <RatioImage src={`${ImagePath}/user/1.jpg`} className='media-object rounded-circle img-60' alt='user'/>
                </div>
                <div className='flex-grow-1 m-l-20'>
                    <h4 className='media-heading'>Johan Deo</h4>
                    <p>JohanDeo@gmail.com<br /><span>555-555-5555</span></p>
                </div>
            </div>
        </Col>
        <Col md='8'>
            <div className='text-md-end' id='project'>
            <h4>{ProjectDescription}</h4>
            <p>{"You're Only As Good As Your Last Collection, Which Is An Enormous Pressure. Jeans Represent Democracy In Fashion.Fashion Is About Dressing According To What's Fashionable."}</p>
            </div>
        </Col>
    </Row>
  )
}

export default UserDetails
