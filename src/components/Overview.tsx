import type { ReactNode } from "react"
import type {  NewsResponseWithParams } from "../utils/types"

const Overview = ({objects}: {objects: NewsResponseWithParams}): ReactNode => {
    const number : number = objects.response.count;
    return (
        <div className="my-6 text-xl">{number} matches</div>
    )
}

export default Overview