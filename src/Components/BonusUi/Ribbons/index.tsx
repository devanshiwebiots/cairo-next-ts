import { Container, Row } from 'reactstrap'
import AnimatedRibbons from './AnimatedRibbons'
import LeftRibbons from './LeftRibbons'
import RightRibbons from './RightRibbons'

const RibbonsContainer = () => {
  return (
     <Container fluid>
        <Row>
            <LeftRibbons />
            <RightRibbons />
            <AnimatedRibbons />
        </Row>
     </Container>
  )
}

export default RibbonsContainer
