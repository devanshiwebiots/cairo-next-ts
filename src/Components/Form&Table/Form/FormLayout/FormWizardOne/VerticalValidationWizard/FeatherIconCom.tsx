import React from 'react'
import * as Icon from 'react-feather';


type FetherType = {
    iconName: keyof typeof Icon,
    className?: string
}
const FeatherIconCom = ({iconName, className} : FetherType) => {
    const IconComp = Icon[iconName]
  return  <IconComp className={className}/>
}

export default FeatherIconCom
