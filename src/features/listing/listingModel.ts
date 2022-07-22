export type ModelListResponse = ModelListItem[];
export interface ModelListItem {
  id: number;
  name: string;
  price: string;
  currency: string;
  image: string;
}
