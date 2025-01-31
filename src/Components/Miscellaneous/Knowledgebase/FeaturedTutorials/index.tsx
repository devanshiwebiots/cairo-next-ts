import RatioImage from '@/CommonComponent/RatioImage'
import { FeaturedTutorial, ImagePath, StarColor } from '@/Constant'
import { FeaturesData } from '@/Data/Knowledgebase'
import { Rating } from 'react-simple-star-rating'
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap'
import ProductHover from './ProductHover'

const FeaturedTutorials = () => {
  return (
    <Col lg='12'>
        <div className='header-faq'>
            <h3 className='mb-0'>{FeaturedTutorial}</h3>
        </div>
        <Row>
            {FeaturesData.map((item, i) => (
                <Col xl='3' sm='6' className='xl-50 box-col-3' key={i}>
                    <Card className='features-faq product-box'>
                        <div className='faq-image product-img'>
                                <RatioImage src={`${ImagePath}/${item.img}`} className='img-fluid'/>
                            <ProductHover />
                            </div>
                        <CardBody>
                            <h4>{item.title}</h4>
                            <p>{item.short_description}</p>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <span>{item.date}</span>
                            <Rating fillColor={StarColor} initialValue={item.rvalue} size={14} />
                        </CardFooter>
                    </Card>
                </Col>
            ))}
        </Row>
    </Col>
  )
}

export default FeaturedTutorials
