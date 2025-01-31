import { DescriptionLists } from '@/Constant'
import React from 'react'
import { Col } from 'reactstrap'

const DescriptionList = () => {
  return (
    <Col md='12' xxl='6'>
        <div className='card-wrapper border rounded-3 h-100'>
            <h6 className='sub-title'>{DescriptionLists}</h6>
            <dl className='row'>
                <dt className='col-sm-3 text-truncate'>Description lists</dt>
                <dd className='col-sm-9'>A description list is perfect for defining terms.</dd>

                <dt className='col-sm-3 '>Term</dt>
                <dd className='col-sm-9'>
                    <p>Definition for the term.</p>
                    <p>And some more placeholder definition text.</p>
                </dd>

                <dt className='col-sm-3'>Another term</dt>
                <dd className='col-sm-9'>This definition is short, so no extra paragraphs or anything.</dd>

                <dt className='col-sm-3'>Truncated term is truncated</dt>
                <dd className='col-sm-9'>This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                <dt className='col-sm-3'>Nesting</dt>
                <dd className='col-sm-9'>
                    <dl className='row'>
                        <dt className='col-sm-4'>Nested definition list</dt>
                        <dt className='col-sm-8'>I heard you like definition lists. Let me put a definition list inside your definition list.</dt>
                    </dl>
                </dd>
            </dl>
        </div>
    </Col>
  )
}

export default DescriptionList
