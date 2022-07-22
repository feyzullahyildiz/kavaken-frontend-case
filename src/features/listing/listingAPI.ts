import { ModelListResponse } from "./listingModel";

export const fetchListingData = async () => {
  const url = "https://glass-functional-song.glitch.me/listing";
  const data = await fetch(url).then((a) => a.json());
  return data as ModelListResponse;
};
