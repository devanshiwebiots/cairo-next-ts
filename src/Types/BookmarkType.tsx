import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface BookMarkData {
    id: number;
    fillStar: boolean;
    image: string;
    title: string;
    website_url: string;
    desc: string;
    collection: string;
  }

export interface BookmarkTabSliceProp {
    bookmark: [] | BookMarkData[];
    bookmarkOne:[] | BookMarkData[]
    bookmarkFilter: boolean;
    activeTabs: string;
    addModal: boolean;
    bookmarkValidation: boolean;
    tagModal: boolean;
    gridView: boolean;
    editModal: boolean;
    editRow?:  BookMarkData|null
    bookMarkList: [] | BookMarkData[];
    isOpen: boolean;
    isTagModalOpen: boolean
  }

  export interface AddNewBookMarkInterFace {
    url: string
    title: string
    desc: string
  }

  export interface DescriptionBookMarkPropsType {
    data: BookMarkData;
    onHandleClick: (book: BookMarkData) => void;
    removeFromBookmark: (bookmarkId: number) => void;
  }

  export interface FavDescriptionDataProp {
    myBookData: BookMarkData;
  }
  
  export interface CommonTabCardProp {
    tabId: string;
    title: string;
  }

  export interface EditBookmarkModalFormType{
    register:UseFormRegister<AddNewBookMarkInterFace>
    errors:FieldErrors<AddNewBookMarkInterFace>
    handleSubmit:UseFormHandleSubmit<AddNewBookMarkInterFace>
    editToggle: () => void
    updateBookMarkData: SubmitHandler<AddNewBookMarkInterFace>
  }