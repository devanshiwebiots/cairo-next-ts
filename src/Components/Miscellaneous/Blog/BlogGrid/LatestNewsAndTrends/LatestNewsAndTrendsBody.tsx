import { LatestNewsAndTrendsList } from '@/Data/Blog'
import Link from 'next/link'
import { Fragment } from 'react'
import { Col } from 'reactstrap'

const LatestNewsAndTrendsBody = () => {
  return (
    <Fragment>
     {LatestNewsAndTrendsList.map(({title, description, date, comments, icon},index) => (
        <Col xxl='6' xl='12' md='6' key={index}>
            <div className='blog-card'>
                <h5>{title}</h5> <p>{description}</p>
                <div className='post-social'>
                    <ul className='d-flex align-items-center'>
                        <li className='bg-light-primary txt-primary'>{date}</li>
                        <li className='bg-light-secondary txt-secondary'>{icon}Admin</li>
                        <li className='bg-light-info txt-info'><i className="fa fa-comments mx-1"/>{comments}</li>
                    </ul>
                </div>
                <Link href={`blog/blog_details`} className='btn'>View more<i className="fa fa-long-arrow-right"></i></Link>
            </div>
        </Col>
     ))}
    </Fragment>
  )
}

export default LatestNewsAndTrendsBody
