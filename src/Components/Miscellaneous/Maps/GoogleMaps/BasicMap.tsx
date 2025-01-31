import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BasicDemoMap } from '@/Constant'
import { BasicCenter, BasicContainerStyle } from '@/Data/Maps'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BasicMap = () => {
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
    })
  return (
     <Col lg='6' md='12'>
        <Card>
            <CommonCardHeader title={BasicDemoMap} headClass='pb-0'/>
            <CardBody>
                <div className='map-js-height overflow-hidden'>
                    <div className='map-block' id='gmap-simple'>
                    {isLoaded ? <GoogleMap mapContainerStyle={BasicContainerStyle} center={BasicCenter} zoom={10} /> : "Loading"}
                    </div>
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default BasicMap
