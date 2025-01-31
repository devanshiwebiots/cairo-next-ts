import SVG from '@/CommonComponent/SVG';
import { AddProductNav } from '@/Data/Ecommerce';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks'
import { setNavId } from '@/Redux/Reducers/AddProductSlice';
import React from 'react'
import { Col, Nav, NavItem, NavLink } from 'reactstrap';

const ProductLeftSidebar = () => {
    const { navId} = useAppSelector((state) => state.addProduct)
    const dispatch = useAppDispatch();
  return (
    <Col xxl='3' xl='4' className='box-col-4e sidebar-left-wrapper'>
        <Nav pills className='sidebar-left-icons nav-pills-tab'>
            {AddProductNav.map((data, index)=>(
                <NavItem key={index}>
                    <NavLink className='border-0' active={navId === data.id ? true : false} onClick={() => dispatch(setNavId(data.id))}>
                        <div className='nav-rounded'>
                            <div className='product-icons'>
                                <SVG className='stroke-icon' iconId={data.icon}/>
                            </div>
                        </div>
                        <div className='product-tab-content'>
                            <h5>{data.title}</h5>
                            <p>{data.detail}</p>
                        </div>
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    </Col>
  )
}

export default ProductLeftSidebar
