import type { ReactNode } from "react";
import type {  NewsResponse } from "../utils/types"
import NewsPageCard from "./NewsPageCard";

const CardsGrid = ({ objects, mode }: { objects: NewsResponse; mode: string }): ReactNode => {
    console.log(mode);
    return (
        <div className="grid grid-cols-1 gap-y-2 auto-rows-[600px] lg:auto-rows-[300px]">
            {
                objects.results.map((item, index) => ( 
                    // <img key={index} src={item.image_url}></img>
                    <NewsPageCard news={item} key={index}/>
                ))
            }
        </div> 
    )
}

export default CardsGrid