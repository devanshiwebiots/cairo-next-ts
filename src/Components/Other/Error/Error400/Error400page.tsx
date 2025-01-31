import { BackToHomePage, ErrorContent } from '@/Constant';
import { Button, Col, Container } from 'reactstrap';
import { Error1 } from './SvgFile';

const Error400Page= () => {
  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
      <div className='error-wrapper'>
        <Container>
            <Error1 />
          <Col md="8" className="offset-md-2">
            <h3>Page Not Found</h3>
            <p className="sub-content">{ErrorContent}</p>
          </Col>
          <div>
            <Button tag="a" color={'primary'} href={`/dashboard/default_dashboard`}>{BackToHomePage}</Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Error400Page
