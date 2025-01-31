import { Href, SearchPixelStrap } from '@/Constant'
import { SearchTabData } from '@/Data/SearchResult'
import Link from 'next/link'
import { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import AllTabRight from './AllTabRight'
import PagesSort from './PagesSort'
import ShowRatings from './ShowRatings'

const AllTabs = () => {
  return (
   <Fragment>
    <h4 className='mb-2'>{SearchPixelStrap}</h4>
    <Row className='gy-3'>
        <Col xxl='6' xl='6' className='box-col-12'>
            {SearchTabData.map((data, i) => (
                <div key={i} className='info-block'>
                    <Link href={Href}>{data.url}</Link>
                    <h5>{data.title}</h5>
                    <p>{data.detail}</p>
                    <div className='star-ratings'>
                        <ul className='search-info'>
                        {data.showStar ? <ShowRatings item={data.showStar} /> : ""}
                            <li>{data.star}</li>
                            <li>{data.vote}</li>
                            <li>{data.news}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </Col>
        <AllTabRight />
        <PagesSort pageClass='end'/>
    </Row>
   </Fragment>
  )
}

export default AllTabs
