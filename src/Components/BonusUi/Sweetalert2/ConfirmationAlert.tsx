import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ClickIt, ConfirmationAlerts } from '@/Constant'
import { ConfirmationAlertData } from '@/Data/BonusUi/Sweetalert2'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import SweetAlert from "sweetalert2";

const ConfirmationAlert = () => {
    const displayAlert = () => {
        SweetAlert.fire({ title: "Do you want to save the changes?", showCancelButton: true, cancelButtonText: "Cancle", confirmButtonText: "Save", confirmButtonColor: "#7A70BA", denyButtonText: "Don't Save", showDenyButton: true }).then((result) => {
          if (result.isConfirmed) {
            SweetAlert.fire({ icon: "success", title: "Saved!",confirmButtonColor: "#7A70BA" });
          } else if (result.isDenied) {
            SweetAlert.fire({ icon:'info',title: "Changes are not saved",confirmButtonColor: "#7A70BA" });
          }
        });
      };
  return (
    <Col xxl='3' xl='4' sm='6' className='box-col-4'>
        <Card className='height-equal'>
            <CommonCardHeader title={ConfirmationAlerts} span={ConfirmationAlertData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
                <Button color='warning' onClick={displayAlert}>{ClickIt}</Button>
            </CardBody>
        </Card>
    </Col>
  )
}

export default ConfirmationAlert
