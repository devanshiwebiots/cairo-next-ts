import { Href, ImagePath, MoreComment } from '@/Constant'
import Link from 'next/link'
import React from 'react'
import AlexendraMesg from './AlexendraMesg'
import IssaBellMsg from './IssaBellMsg'
import JasonBorneMsg from './JasonBorneMsg'
import OliviaJonMsg from './OliviaJonMsg'

const SocialChat = () => {
  return (
    <div className='social-chat'>
          <JasonBorneMsg />
          <AlexendraMesg />
          <OliviaJonMsg />
          <IssaBellMsg />
          <div className='text-center'>
            <Link href={Href}>{MoreComment}</Link>
          </div>
    </div> 
  )
}

export default SocialChat
