//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LeafletWorldMaps } from "@/Constant";
import { UsaPosition, WorldMapData } from "@/Data/Maps";
import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";

const WorldMaps = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LeafletWorldMaps} span={WorldMapData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <MapContainer style={{ height: 389 }} easeLinearity={0.35} attributionControl={true} center={UsaPosition} zoom={13} scrollWheelZoom={true} className="z-0 jvector-map-height">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WorldMaps;
