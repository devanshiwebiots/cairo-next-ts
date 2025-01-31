import { Href, ImagePath } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setBookmark, setBookMarkList } from '@/Redux/Reducers/BookmarkTabSlice';
import { BookMarkData } from '@/Types/BookmarkType';
import React, { useEffect } from 'react'
import { Card, Col, Row } from 'reactstrap';
import SearchNotFoundClass from '../../Chat/PrivateChat/LeftSideBar/SearchNotFoundClass';
import FavDescriptionData from './FavDescriptionData';
import RatioImage from '@/CommonComponent/RatioImage';

const FavDataLoop = () => {
    const { bookmark, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const updateList = bookmark.filter((data) => data.fillStar === true)
        dispatch(setBookMarkList(updateList))
    },[bookmark, dispatch])

    const removeFromFavorite = (item: BookMarkData) => {
        const updateBookMark = bookmark.map((data) => (data.id === item.id ? {...data, fillStar: false} : data))
        dispatch(setBookmark(updateBookMark))
    }
  return (
    <Row>
       {bookMarkList.length > 0 ? (
        bookMarkList.map((myBookData: BookMarkData) => (
          <Col xxl="3" md="4" className="col-ed-4" key={myBookData.id}>
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <RatioImage className="img-fluid" src={`${ImagePath}/${myBookData.image}`} alt="Image" />
                <div className={`favourite-icon favourite_0 ${myBookData.fillStar ? "favourite" : ""}`}>
                  <a href={Href}>
                    <i className="fa fa-star" onClick={() => removeFromFavorite(myBookData)}></i>
                  </a>
                </div>
                <FavDescriptionData myBookData={myBookData} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <SearchNotFoundClass word="Bookmark"/>
      )}
    </Row>
  )
}

export default FavDataLoop
