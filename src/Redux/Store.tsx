import { configureStore } from "@reduxjs/toolkit";
import AddProductSlice from "./Reducers/AddProductSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import CartSlice from "./Reducers/CartSlice";
import ChatSlice from "./Reducers/ChatSlice";
import ContactSlice from "./Reducers/ContactSlice";
import FileManagerSlice from "./Reducers/FileManagerSlice";
import FilterSlice from "./Reducers/FilterSlice";
import FormWizardTwoSlice from "./Reducers/FormWizardTwoSlice";
import HeaderBookMarkSlice from "./Reducers/HeaderBookMarkSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import NumberingWizardSlice from "./Reducers/NumberingWizardSlice";
import ProductSlice from "./Reducers/ProductSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import StudentWizardSlice from "./Reducers/StudentWizardSlice";
import TaskSlice from "./Reducers/TaskSlice";
import ThemeCustomizerSlice from "./Reducers/ThemeCustomizerSlice";
import ToDoSlice from "./Reducers/ToDoSlice";
import TwoFactorSlice from "./Reducers/TwoFactorSlice";
import VerticalWizardSlice from "./Reducers/VerticalWizardSlice";

const Store = configureStore({
reducer : {
    themeCustomizer: ThemeCustomizerSlice,
    layout: LayoutSlice,
    headerBookMark: HeaderBookMarkSlice,
    project: ProjectSlice,
    fileManager: FileManagerSlice,
    filterData: FilterSlice,
    product: ProductSlice,
    addProduct:AddProductSlice,
    letterBox: LetterBoxSlice,
    cartData: CartSlice,
    bookmarkTab: BookmarkTabSlice,
    todo: ToDoSlice,
    contact: ContactSlice,
    task: TaskSlice,
    numberingWizard: NumberingWizardSlice,
    studentWizard: StudentWizardSlice,
    verticalWizard: VerticalWizardSlice,
    formWizardTwo:FormWizardTwoSlice,
    twoFactor: TwoFactorSlice,
    Chat: ChatSlice,
}
})

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;