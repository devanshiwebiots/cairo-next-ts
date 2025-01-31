//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LeafletIndiaMap } from "@/Constant";
import { IndianMapData, IndianMapPosition } from "@/Data/Maps";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";

const IndianMap = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LeafletIndiaMap} span={IndianMapData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={5} center={IndianMapPosition} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndianMap;
