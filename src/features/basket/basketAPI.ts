import { BasketListResponse } from "./basketModel";

export const fetchData = async () => {
  const url = "https://glass-functional-song.glitch.me/listing";
  const data = await fetch(url).then((a) => a.json());
  return data as BasketListResponse;
};
