import { SearchArticle, SearchArticlesPlaceholder } from '@/Constant'
import React from 'react'
import { HelpCircle, Search } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap'

const SearchArticles = () => {
  return (
    <Col lg='12'>
            <Card className='card-mb-faq xs-mt-search'>
                <CardHeader className='faq-header pb-0'>
                    <h4>{SearchArticle}</h4>
                    <HelpCircle />
                </CardHeader>
                <CardBody className='faq-body'>
                    <div className='faq-form'>
                        <Input type='text' placeholder={SearchArticlesPlaceholder}/><Search className='search-icon'/>
                    </div>
                </CardBody>
            </Card>
         </Col>
  )
}

export default SearchArticles
