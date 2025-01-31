import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Gridmodal } from '@/Constant'
import { GridModalSpan } from '@/Data/Uikits/Modal'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import GridCommonModal from './GridCommonModal'

const GridModal = () => {
    const [gridModal, setGridModal] = useState(false);
    const gridModalToggle = () => setGridModal(!gridModal)
  return (
    <Col md='6'>
        <Card className='height-equal'>
            <CommonUIkitsComponent title={Gridmodal} span={GridModalSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
             <CardBody>
             <Button color='warning' onClick={gridModalToggle}>{Gridmodal}</Button>
                <GridCommonModal toggle={gridModalToggle} isOpen={gridModal}/>
             </CardBody>
        </Card>
    </Col>
  )
}

export default GridModal
