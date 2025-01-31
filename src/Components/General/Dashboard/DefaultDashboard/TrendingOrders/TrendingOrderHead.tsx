import RatioImage from "@/CommonComponent/RatioImage"
import { ImagePath } from "@/Constant"
import { TrendingOrderData } from "@/Data/Dashboard"

export const TrendingOrderHead = () => {
    return(
       <div className="selling-top">
        <ul className="d-flex">
            {TrendingOrderData?.map((item, index) => (
                <li key={index} className='d-flex align-items-center gap-3'>
                    <div className="flex-shrink-0">
                        <RatioImage src={`${ImagePath}/dashboard/selling/${item.image}`} alt='product'/>
                    </div>
                    <div className="flex-grow-1">
                        <h5>{item.price} / <span>Month</span></h5>
                        <p>{item.brand}</p>
                    </div>
                </li>
            ))}
        </ul>
       </div>
    )
}