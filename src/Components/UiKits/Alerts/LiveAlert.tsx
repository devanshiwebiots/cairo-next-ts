import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent';
import { LiveAlerts, ShowLiveAlert } from '@/Constant';
import { LiveAlertData } from '@/Data/Uikits/Alerts';
import React, { useState } from 'react'
import { Alert, Button, Card, CardBody, Col } from 'reactstrap';

const LiveAlert = () => {
    const [data, setData] = useState<string[]>([]);

    const dataShow = (key: number) => {
        setData(data.filter((item, index) => index !== key))
    }
  return (
    <Col xl="6">
    <Card>
      <CommonUIkitsComponent title={LiveAlerts} span={LiveAlertData} spanClass='mt-1 mb-0' headClass='pb-0'/>
      <CardBody className="live-dark">
        {data.length > 0 &&
          data.map((item, index) => (
            <Alert fade color="light-dark" className="alert-dismissible" key={index}>
              <p className="text-dark">Nice, you triggered this alert message!</p>
              <Button close onClick={() => dataShow(index)}></Button>
            </Alert>
          ))}
        <Button color="dark" onClick={() => setData(() => [...data, "Alerts"])}>{ShowLiveAlert}</Button>
      </CardBody>
    </Card>
  </Col>
  )
}

export default LiveAlert
