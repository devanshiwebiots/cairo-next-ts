import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DisabledTrees } from '@/Constant';
import { DisableTreeData, TreeViewList } from '@/Data/Uikits/TreeView';
import TreeView, { flattenTree } from "react-accessible-treeview";
import { Card, CardBody } from 'reactstrap';
import { ArrowIcon, CheckBoxIcon } from './BasicTrees';

const DisabledTree = () => {
    const disableTreeData = flattenTree(TreeViewList)
  return (
    <Card>
        <CommonCardHeader title={DisabledTrees} span={DisableTreeData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            <div className='disabled-container'>
                <div className='checkbox'>
                    <TreeView data={disableTreeData} aria-label="Checkbox tree" multiSelect propagateSelect propagateSelectUpwards defaultExpandedIds={[4,9]} defaultDisabledIds={[2,3,4,5,6,7,8,9,10,11,12]} togglableSelect expandedIds={[1,2,6,10,14,27]} nodeRenderer={({element, isBranch, isExpanded, isSelected, isDisabled, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => (
                       <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1), opacity: isDisabled ? 0.5 : 1,marginTop:5 }}>
                       {isBranch && <ArrowIcon isOpen={isExpanded} />}<CheckBoxIcon className="checkbox-icon " onClick={(e: any) => { handleSelect(e); e.stopPropagation(); }} variant={isHalfSelected ? "some" : isSelected ? "all" : "none"} /><span className="name">{element.name}</span>
                       </div>
                    )}/>
                </div>
            </div>
        </CardBody>
    </Card>
  )
}

export default DisabledTree
