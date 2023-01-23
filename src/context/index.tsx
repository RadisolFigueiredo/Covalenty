import { CategoryContextProvider } from './categories';
import { ProductContextProvider } from './products';

export const CategoryContext = ({ children }: any) => {
  return (
    <>
      <CategoryContextProvider>{children}</CategoryContextProvider>
    </>
  );
};

export const ProductContext = ({ children }: any) => {
  return (
    <>
      <ProductContextProvider>{children}</ProductContextProvider>
    </>
  );
};
