import SVG from "@/CommonComponent/SVG";
import { Search } from "@/Constant";
import { MenuList } from "@/Data/Layout/MenuList";
import { useAppDispatch } from "@/Redux/Hooks";
import { getLinkItemsArray } from "@/Redux/Reducers/HeaderBookMarkSlice";
import { MenuItem, SearchSuggestionItem } from "@/Types/LayoutTypes";
import { ChangeEvent, useEffect, useState } from "react";
import { Col } from "reactstrap";
import SearchSuggestionList from "./SearchSuggestionList";

export const Searchbar = () => {
  const dispatch = useAppDispatch();
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    let num = 0;
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.children) {
        item.children.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggestionArray.push({ icon: icon, title: item.title, path: item.path ? item.path : "", bookmarked: false, id: num });
      }
    };

    MenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggestionArray);
    dispatch(getLinkItemsArray(suggestionArray));
  }, [dispatch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    const result = arr.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };

  return (
    <Col xl="4" md="3" className="left-header col-auto box-col-5 horizontal-wrapper p-0">
      <div className="left-menu-header">
        <ul className="header-left">
          <li>
            <div className="form-group w-100">
              <div className="Typeahead Typeahead--twitterUsers">
                <div className="u-posRelative d-flex">
                  <div className="search-bg svg-color me-2">
                    <SVG iconId="fill-search" />
                  </div>
                  <input className="demo-input py-0 Typeahead-input form-control-plaintext w-100" type="text" placeholder={Search} name="q" title="" onChange={(e) => handleSearch(e)} value={searchedWord} />
                </div>
                <div className={`Typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
                  <SearchSuggestionList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Col>
  );
};
