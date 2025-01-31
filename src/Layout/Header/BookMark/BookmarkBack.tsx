import SVG from "@/CommonComponent/SVG";
import { Back, Href } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handleBookmarkChange } from "@/Redux/Reducers/HeaderBookMarkSlice";
import { setFlip } from "@/Redux/Reducers/LayoutSlice";
import { BookmarkedDataType } from "@/Types/LayoutTypes";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { Input } from "reactstrap";

export const BookmarkBack = () => {
    const dispatch = useAppDispatch();
    const { linkItemsArray } = useAppSelector((state) => state.headerBookMark)
    const [searchedItems, setSearchedItems] = useState<(BookmarkedDataType)[]>([])
    const [searchWord, setSearchWord] = useState('')

    const searchItems = (e: string) => {
        const copyArray = [...linkItemsArray]
        const result = copyArray.filter((item) => item.title?.toLowerCase().includes(e.toLowerCase()))
        setSearchedItems(result)
    }

    const handleBackButton = () => {
        dispatch(setFlip());
        setSearchWord("")
    }

    const bookMarkInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setSearchWord(e.target.value);
        searchItems(e.target.value);
      }

    return (
        <div className="back">
            <ul>
                <li>
                    <div className="bookmark-dropdown flip-back-content">
                        <Input type="text" placeholder="search..." onChange={(e) => bookMarkInputChange(e)} value={searchWord}/>
                    </div>
                    <div className={`filled-bookmark Typeahead-menu  ${searchWord ? "is-open" : ""} custom-scrollbar`}>
                      {searchedItems?.map((item:any, i:number) => (
                        <div key={i} className='ProfleCard u-cf'>
                            <div className="ProfileCard-avatar"><SVG iconId={`stroke-${item.icon}`}/></div>
                            <div className="ProfileCard-details">
                                <div className="ProfileCard-realName">
                                    <a className="realname" href={Href}>{item.title}</a>
                                    <span className="pull-right">
                                        <a href={Href}>
                                        <i onClick={() => dispatch(handleBookmarkChange(linkItemsArray[item.id - 1]))} className={`fa fa-star-o mt-1 icon-star ${linkItemsArray[item.id - 1].bookmarked ? "starred" : ""}`}></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                      ))}
                      {!searchedItems.length && <p>Opps!! There are no result found. </p>}
                    </div>
                </li>
                <li onClick={handleBackButton}>
                    <a className="f-w-700 d-block flip-back" id="flip-back" href={Href}>{Back}</a>
                </li>
            </ul>
        </div>
    )
}