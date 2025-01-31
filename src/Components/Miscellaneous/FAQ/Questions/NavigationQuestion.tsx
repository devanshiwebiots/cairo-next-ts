import { AskOurCommunity, FaqContactUs, Href } from '@/Constant'
import { NavigationQuestionData } from '@/Data/FAQ'
import Link from 'next/link'
import React from 'react'
import { Mail, MessageCircle } from 'react-feather'

const NavigationQuestion = () => {
  return (
    <div className='navigation-option'>
       <ul>
         {NavigationQuestionData.map(({icon, title, badge}, index) => (
            <li key={index}>
                <Link href={Href}>{icon} {title}</Link>
                <span className='badge badge-primary rounded-pill pull-right'>{badge}</span>
            </li>
         ))}
       </ul>
       <ul>
        <hr />
        <li className="border-0"><Link href={Href}><Mail />{FaqContactUs}</Link></li>
        <li className="border-0"><Link href={Href}><MessageCircle />{AskOurCommunity}</Link></li>
       </ul>
    </div>
  )
}

export default NavigationQuestion
