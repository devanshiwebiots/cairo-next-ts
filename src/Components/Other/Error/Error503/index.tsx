import { BackToHomePage } from '@/Constant';
import { Button, Col, Container } from 'reactstrap';
import { Error503SVG } from './Error503SVG';

const Error503Container = () => {
  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
    <div className='error-wrapper'>
      <Container>
        <div className='svg-wrraper '>
          <Error503SVG />
          </div>
        <Col md="8" className="offset-md-2">
          <h3 className='text-center'>Page Not Found</h3>
          <p className="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
        </Col>
        <div>
          <Button tag="a" color={'primary'} href={`/dashboard/default_dashboard`}>{BackToHomePage}</Button>
        </div>
      </Container>
    </div>
  </div>
  )
}

export default Error503Container
