import React from 'react'
import { Container, Row } from 'reactstrap'
import ArticleVideo from './ArticleVideo'
import Articles from './Articles'
import FAQFeaturesTutorial from './FAQFeaturesTutorial'
import Questions from './Questions'

const FAQContainer = () => {
  return (
    <Container fluid>
        <div className='faq-wrap'>
            <Row>
                <Articles />
                <Questions />
                <FAQFeaturesTutorial />
                <ArticleVideo />
            </Row>
        </div>
    </Container>
  )
}

export default FAQContainer
