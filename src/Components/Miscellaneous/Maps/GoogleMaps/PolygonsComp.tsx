import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { PolygonsTitle } from '@/Constant'
import { PolygonCenter, PolygonContainerStyle } from '@/Data/Maps'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const PolygonsComp = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places'
    })
  return (
    <Col lg='6' md='12'>
        <Card>
            <CommonCardHeader title={PolygonsTitle} headClass='pb-0'/>
            <CardBody>
              <div className='map-js-height overflow-hidden'>
                <div className='map-block' id='gmap-simple'>
                    {isLoaded ? (
                        <GoogleMap mapContainerStyle={PolygonContainerStyle}
                        center={PolygonCenter}
                        zoom={10}
                        ></GoogleMap>
                    ): (
                        'loading'
                    )}
                </div>
              </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default PolygonsComp
