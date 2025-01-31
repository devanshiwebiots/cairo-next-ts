import { Container, Row } from 'reactstrap'
import Articals from '../Articals'
import ArticlesAndVideos from './ArticlesAndVideos'
import CategoryData from './CategoryData'
import FeaturedTutorials from './FeaturedTutorials'
import KnowledgebaseHelp from './KnowledgebaseHelp'

const KnowledgebaseContainer = () => {
  return (
    <Container fluid>
        <Row>
            <KnowledgebaseHelp />
            <Articals />
            <CategoryData />
            <FeaturedTutorials />
            <ArticlesAndVideos />
        </Row>
    </Container>
  )
}

export default KnowledgebaseContainer
