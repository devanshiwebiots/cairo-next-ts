import SVG from '@/CommonComponent/SVG';
import { InterviewMail } from '@/Constant';
import { MailHeader } from '@/Data/LetterBox';
import { useAppDispatch } from '@/Redux/Hooks'
import { handleInterview } from '@/Redux/Reducers/LetterBoxSlice';
import React, { Fragment, useState } from 'react'
import { Tooltip } from 'reactstrap';

const InterviewMailHeader = () => {
    const dispatch = useAppDispatch();
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenTooltip(openTooltip !== index ? index : null);
  };

  return (
    <div className="mail-header-wrapper header-wrapper1">
    <div className="mail-header1">
      <div className="light-square" onClick={() => dispatch(handleInterview(false))}>
        <SVG className="btn-email" iconId="back-arrow" />
      </div>
      <span>{InterviewMail}</span>
    </div>
    <div className="mail-body1">
      {MailHeader.map((data, i) => (
        <Fragment key={i}>
          <div className="light-square" id={`light-${data.icon}`} onClick={() => toggle(i)}>
            <SVG iconId={data.icon} className={data.className ? data.className : ""} />
          </div>
          <Tooltip placement="top" isOpen={openTooltip === i} target={`light-${data.icon}`} toggle={() => toggle(i)}>{data.tooltip}</Tooltip>
        </Fragment>
      ))}
    </div>
  </div>
  )
}

export default InterviewMailHeader
