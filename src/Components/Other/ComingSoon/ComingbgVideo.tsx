import { ImagePath, WeAreComingSoon } from '@/Constant'
import React from 'react'
import { Container } from 'reactstrap'
import CountdownData from './CountdownData'
import Image from 'next/image'

const ComingbgVideoContainer = () => {
  return (
    <div className='page-wrapper compact-wrapper'>
      <Container fluid className='pb-0'>
        <div className='comingsoon auth-bg-video'>
            <video  className="bgvideo-comingsoon" id='bgvid' poster={`${ImagePath}/other-images/coming-soon-bg.jpg`} playsInline autoPlay muted loop>
                <source src={`/assets/video/auth-bg.mp4`} type='video/mp4'/>
            </video>
            <div className='comingsoon-inner text-center'>
                <Image src={`${ImagePath}/logo/logo-1.png`} alt='' width={114} height={38}/>
                <h5>{WeAreComingSoon}</h5>
                <div className="countdown">
                  <CountdownData />
                 </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default ComingbgVideoContainer
