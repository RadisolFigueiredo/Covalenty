import { Product } from "./product";

export type CardProps = {
  products: Product[];
  totalProducts?: number;
  setOffset?: (value: number) => void | undefined;
};
