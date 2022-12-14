import { Information } from './information';

export interface Listing {
  id: number;
  title: string;
  info: Information;
  price: number;
  category: string;
  thumbImgUrl: string;
  imageUrl: string;
  inStock: number;
  inCart: number;
}
