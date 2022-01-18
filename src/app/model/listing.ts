import { Information } from './information';

export interface Listing {
  title: string;
  info: Information;
  price: number;
  category: string;
  imageUrl: string;
  amount: number;
}
