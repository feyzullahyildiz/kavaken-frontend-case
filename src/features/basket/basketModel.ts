export type BasketListResponse = BasketItem[];
export interface BasketItem {
  id: number;
  name: string;
  price: string;
  currency: string;
  image: string;
}
