import SVG from "@/CommonComponent/SVG"
import { useAppDispatch } from "@/Redux/Hooks"
import { setResponsiveSearch } from "@/Redux/Reducers/LayoutSlice"

export const SearchNav = () => {
  const dispatch = useAppDispatch()
    return(
        <li className="serchinput" onClick={()=>dispatch(setResponsiveSearch())}>
            <div className="searchbox">
                <SVG iconId="fill-search"/>
            </div>
        </li>
    )
}