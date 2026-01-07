import { CreateAccount, DontHaveAccount, EmailAddressLogIn, ForgotPassword, Href, OrSignInWith, Password, RememberPassword, Signin, SignInToAccount } from '@/Constant'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import logo2 from '../../../../public/assets/images/logo/logo-1.png'
import logo1 from '../../../../public/assets/images/logo/logo.png'
import UserSocialApp from './UserSocialApp'
import { signIn } from "next-auth/react";
import toast from 'react-hot-toast'


const UserForm = () => {
    const [show, setShow] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();
 
  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();                                                                                  
    const result = await signIn("credentials", {
      email,   
      password,  
      redirect: false,
      callbackUrl: "/dashboard/ecommerce",
    });
  
    if (result?.ok) {
      toast.success("successfully Logged in Rediract......")
      router.push("/dashboard/ecommerce");
    } else {     
      toast.error("Invalid Credentaial...");
    }
  };
    return (
        <div>
            <div>
                <Link className='logo' href={`/dashboard/default_dashboard`}>
                    <Image className='img-fluid for-light' src={logo2.src} alt='login page' width={114} height={38} priority unoptimized/>
                    <Image className='img-fluid for-dark' src={logo1.src} alt='login page' width={114} height={38} unoptimized/>
                </Link>
            </div>
            <div className='login-main'>
                <Form className='theme-form' onSubmit={(event) => formSubmitHandle(event)}>
                    <h4>{SignInToAccount}</h4>
                    <p>Enter your email & password to login</p>
                    <FormGroup>
                        <Label className='col-form-label'>{EmailAddressLogIn}</Label>
                        <Input type='email' defaultValue={email} onChange={(event) => setEmail(event.target.value)} placeholder='Test123@gmail.com' />
                    </FormGroup>
                    <FormGroup>
                        <Label className='col-form-label'>{Password}</Label>
                        <div className='position-relative '>
                            <Input type={show ? 'text' : 'password'} defaultValue={password} onChange={(event) => setPassword(event.target.value)} placeholder='Test@123' />
                            <div className='show-hide' onClick={() => setShow(!show)}><span className="show"> </span></div>
                        </div>
                    </FormGroup>
                    <FormGroup className='mb-0 position-relative'>
                        <div className="checkbox p-0">
                            <Input id="checkbox1" type="checkbox" />
                            <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                        </div>
                        <Link href={Href} className='link'>{ForgotPassword}</Link>
                        <div className='text-end mt-3'>
                            <Button color='primary' block className='w-100'>{Signin}</Button>
                        </div>
                    </FormGroup>
                    <h6 className='text-muted mt-4 or'>{OrSignInWith}</h6>
                    <UserSocialApp />
                    <p className='mt-4 mb-0 text-center'>{DontHaveAccount}
                        <Link className='ms-2' href={Href}>{CreateAccount}</Link>
                    </p>
                </Form>
            </div>
        </div>
    )
}

export default UserForm
