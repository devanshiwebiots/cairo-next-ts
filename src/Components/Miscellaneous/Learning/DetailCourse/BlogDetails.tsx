import { DateLearning } from '@/Constant'
import { DetailedCourseHeading, DetailedCourseParagraph1, DetailedCourseParagraph2 } from '@/Data/Learning'
import React from 'react'

const BlogDetails = () => {
  return (
    <div className='blog-details'>
      <ul className='blog-social'>
        <li>{DateLearning}</li>
        <li><i className="icofont icofont-user" />Mark <span>Jecno </span></li>
        <li><i className="icofont icofont-thumbs-up" />02 <span>Hits </span></li>
        <li><i className="icofont icofont-ui-chat" /> 598 Comments</li>
      </ul>
      <h4 className='pt-2'>{DetailedCourseHeading}</h4>
      <div className='single-blog-content-top'>
        <p>{DetailedCourseParagraph1}</p>
        <p>{DetailedCourseParagraph2}</p>
      </div>
    </div>
  )
}

export default BlogDetails
