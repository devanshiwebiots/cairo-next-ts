import { useState } from "react"
import { getTrackBackground, Range } from "react-range"
import { Col, Form, Row } from "reactstrap"

const NegativeValueForm = () => {
    const [values, setValues] = useState([-500])
    const STEP = -1;
    const MIN = -1000
    const MAX = 500
    return(
     <Form className="theme-form form-label-align-right range-slider">
        <Row className="form-group py-1">
            <Col md='10'>
                <div style={{color: '#26A7D6'}} className='d-flex justify-content-center flex-wrap m-3'>
                    <Range values={values} min={MIN} max={MAX} step={STEP} onChange={(values) => setValues(values)} renderTrack={({props, children}) => (
                        <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{...props.style, height:'30px'}} className='d-flex w-100'>
                            <output className="mt-2 me-2">-1000</output>
                            <div ref={props.ref} style={{height: '3px', width:'100%', borderRadius:'4px', background: getTrackBackground({values: values, colors:['#26A7D6', '#ccc'], min:MIN, max: MAX}), alignSelf:'center'}}>{children}</div>
                            <output className="mt-2 ms-2">500</output>
                        </div>
                    )}
                    renderThumb = {({props,index}) => (
                        <div {...props} key={index} className='d-flex justify-content-center align-items-center rounded-5' style={{...props.style, height:'20px', width:'20px', borderRadius:'3px solid #26A7D6', backgroundColor:'#26A7D6', boxShadow:'0 2px 6px #AAA'}}></div>
                    )}
                    />
                </div>
            </Col>
        </Row>
     </Form>
    )
}

export default NegativeValueForm
