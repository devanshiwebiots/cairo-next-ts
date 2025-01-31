import { useAppDispatch } from '@/Redux/Hooks';
import { fetchProductApiData } from '@/Redux/Reducers/ProductSlice';
import React, { useEffect } from 'react'
import { Card, Container, Row } from 'reactstrap';
import BrandDetail from './BrandDetail';
import ClothesDetails from './ClothsDetails';
import ImageSlider from './ImageSlider';
import ProductDetails from './ProductDetails';

const ProductPageContainer = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProductApiData())
    })
  return (
  <Container fluid>
    <div>
        <Row>
            <ImageSlider />
            <ProductDetails />
            <BrandDetail />
        </Row>
        <Card>
          <Row className='product-page-main'>
            <ClothesDetails />
          </Row>
        </Card>
    </div>
  </Container>
  )
}

export default ProductPageContainer
