import RatioImage from '@/CommonComponent/RatioImage'
import { ImagePath, StarColor } from '@/Constant'
import { FeaturesData } from '@/Data/FAQ'
import { Rating } from 'react-simple-star-rating'
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap'

const FaqFeaturesTutorial = () => {
  return (
    <Row>
        {FeaturesData.map(({img, date, short_description,title}, index) => (
            <Col xxl='3' sm='6' className='box-col-3' key={index}>
                <Card className='features-faq product-box'>
                    <div className='faq-image product-img'>
                        <RatioImage src={`${ImagePath}/${img}`} className='img-fluid'/>
                        <div className='product-hover'>
                        <ul>
                            <li><i className="icon-link"></i></li>
                            <li><i className="icon-import"></i></li>
                        </ul>
                        </div>
                    </div>
                    <CardBody>
                        <h4>{title}</h4>
                        <p>{short_description}</p>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center justify-content-between'>
                        <span>{date}</span>
                        <Rating fillColor={StarColor} initialValue={Math.random() * 5} size={14} />
                    </CardFooter>
                </Card>
            </Col>
        ))}
    </Row>
  )
}

export default FaqFeaturesTutorial
