import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Polygons } from '@/Constant'
import { PolylineCenter, PolylineContainerStyle } from '@/Data/Maps'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const PolylinesMapComp = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:'https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places'
    })
  return (
   <Col lg='6'>
     <Card>
        <CommonCardHeader title={Polygons} headClass='pb-0'/>
         <CardBody>
            <div className='map-js-height overflow-hidden'>
                <div className='map-block' id='gmap-simple'>
                    {isLoaded ? (
                        <GoogleMap mapContainerStyle={PolylineContainerStyle}
                        center={PolylineCenter}
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

export default PolylinesMapComp
