//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LeafletUSAMap } from "@/Constant";
import { UsaMapData } from "@/Data/Maps";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";

const USAMaps = () => {
  const positionUSA = { lat: 51.505, lng: -0.09 };
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LeafletUSAMap} span={UsaMapData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={13} center={positionUSA} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} easeLinearity={0.35}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default USAMaps;
