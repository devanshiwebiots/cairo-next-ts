import { useAppSelector } from '@/Redux/Hooks'
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Card } from 'reactstrap';
import InterviewMailBody from './InterviewMailBody';
import InterviewMailHeader from './InterviewMailHeader';

const InterviewMail = () => {
    const {interviewEmail} = useAppSelector((state) => state.letterBox)
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handlePrintData = useReactToPrint({
      content: () => componentRef.current,
    });
  return (
    <Card className={`email-body email-read ${interviewEmail ? "show" : "hide"}`}>
        <InterviewMailHeader />
        <InterviewMailBody  ref={componentRef} handlePrintData={handlePrintData} />
    </Card>
  )
}

export default InterviewMail
