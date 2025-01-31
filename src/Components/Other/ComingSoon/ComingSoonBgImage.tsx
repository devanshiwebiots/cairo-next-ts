import { ImagePath, WeAreComingSoon } from '@/Constant'
import Image from 'next/image'
import { Container } from 'reactstrap'
import CountdownData from './CountdownData'

const ComingSoonBgImageContainer = () => {
  return (
    <div className='page-wrapper compact-wrapper'>
      <Container fluid className='p-0 m-0'>
        <div className='comingsoon comingsoon-bgimg'>
            <div className='comingsoon-inner text-center'>
                <Image src={`${ImagePath}/logo/logo-1.png`} alt='' width={114} height={38}/>
                <h5>{WeAreComingSoon}</h5>
                <div className='countdown' id='clockdiv'>
                    <CountdownData />
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default ComingSoonBgImageContainer;
