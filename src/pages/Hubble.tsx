import { useLoaderData, type LoaderFunction } from "react-router-dom"
import { datastroCustomFetch } from "../utils/customFetch"
import type { FiltersParams, HubbleImageResponse, HubbleImageResponseWithParams } from "../utils/types"
import { CardsGrid, Filters, Overview, Title } from "../components"

const hubbleParams = {
  // order_by: "photo_date_taken desc",
  limit: 24,
}
export const hubblePageLoader: LoaderFunction = async ({ request }): Promise<HubbleImageResponseWithParams | null> => {
  try {
    const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    const formatterParams = {
      where: params.term ? `photo_title like "${params.term}"` : "",
      ...hubbleParams,
    };
    const response = await datastroCustomFetch.get<HubbleImageResponse>("", {
      params: formatterParams,
    });
    return { response: response.data, params };

  } catch (error) {
    console.log(error);
    return null;
  }
}
const Hubble = () => {
  const data = useLoaderData() as HubbleImageResponseWithParams;
  const { response, params } = data;
  // console.log(data);
  return (
    <section className="section">
      <Title text="Hubble telescope photos"></Title>
      <Filters term={params.term} mode="hubble" key={params.term} />
      <Overview objects={response} />
      <CardsGrid objects={response} mode="hubble-page" />
    </section>
  )
}

export default Hubble