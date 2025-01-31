import { CommonPopoverProp } from '@/Types/UikitsType'
import React, { Fragment, useState } from 'react'
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap';

const CommonPopover: React.FC<CommonPopoverProp> = ({item}) => {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
  return (
   <Fragment>
     <Button color={item.btnColor} className="example-popover" id={`${"Popover-" + item.id}`}>{item.btntext}</Button>
      <Popover placement={item.placement} isOpen={popover} target={"Popover-" + item.id} toggle={toggle} trigger={item.trigger}>
        <PopoverHeader>{item.Popoverheader}</PopoverHeader>
        <PopoverBody>{item.Popoverbody}</PopoverBody>
      </Popover>
   </Fragment>
  )
} 

export default CommonPopover
