//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LeafletAustraliaMap } from "@/Constant";
import { AustaliaMapData, AustaliaMapPosition } from "@/Data/Maps";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";

const AustraliaMap = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LeafletAustraliaMap} span={AustaliaMapData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={4} center={AustaliaMapPosition} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AustraliaMap;
