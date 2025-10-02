import type { ReactNode } from "react";
import type {  HubbleImage, HubbleImageResponse, News, NewsResponse } from "../utils/types"
import NewsPageCard from "./NewsPageCard";
import HubbleCard from "./HubbleCard";

const CardsGrid = ({ objects, mode }: { objects: NewsResponse | HubbleImageResponse; mode: string }): ReactNode => {
    console.log(mode);

    if (mode === "hubble-page") {
        return (
            <div className=" mb-16 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    objects.results.map((item, index) => (
                        <HubbleCard image={item as HubbleImage } key={index}/>
                    ))
                }
            </div>
        ) 
    } else if (mode === "news-page") {
    return (
        <div className="grid grid-cols-1 gap-y-2 auto-rows-[600px] lg:auto-rows-[300px]">
            {
                objects.results.map((item, index) => ( 
                    <NewsPageCard news={item as News} key={index}/>
                ))
            }
        </div> 
    ) 
}
}

export default CardsGrid