import { AlreadyHaveAnAccount, AuthSignIn, EnterYourPassword, ImagePath, RememberPassword, Unlock } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const UnlockUserContainer = () => {
    const [show,setShow]= useState(false)
  return (
    <Container fluid className="p-0">
    <div className="authentication-main mt-0">
      <Row>
        <Col sm="12">
          <div className="login-card login-dark">
            <div>
              <div><Link className="logo" href={`/dashboard/default_dashboard`}>
                <Image className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="looginpage" width={114} height={38} priority/>
                <Image className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="looginpage" width={114} height={38}/></Link></div>
              <div className="login-main">
                <Form className="theme-form" onSubmit={(e)=>e.preventDefault()}>
                  <h4>{Unlock}</h4>
                  <FormGroup>
                    <Label className='col-form-label'>{EnterYourPassword}</Label>
                    <div className="position-relative">
                      <Input type={show? "text" :"password"} required placeholder="*********" autoComplete="off"/>
                      <div className="show-hide" onClick={()=>setShow(!show)}><span className="show"></span></div>
                    </div>
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox"/>
                      <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                    </div>
                    <Button block color='primary' className="w-100">{Unlock}</Button>
                  </FormGroup>
                  <p className="mt-4 mb-0">{AlreadyHaveAnAccount}<Link className="ms-2" href={`/others/authentication/loginsimple`}>{AuthSignIn}</Link></p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
    </Row>
    </div>
  </Container>
  )
}

export default UnlockUserContainer
