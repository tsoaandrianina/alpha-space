import type { ReactNode } from "react"
import type {  HubbleImageResponse, NewsResponseWithParams } from "../utils/types"

const Overview = ({objects}: {objects: NewsResponseWithParams | HubbleImageResponse }): ReactNode => {
    let number : number;
    if("total_count" in objects) {
        number =objects.total_count
    } else {
        number =  objects.response.count;
    }
    return (
        <div className="my-6 text-xl">{number} matches</div>
    )
}

export default Overview