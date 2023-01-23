import { CategoryContextProvider } from './categories';
import { ProductContextProvider } from './products';

const GlobalContext = ({ children }: any) => {
  return (
    <>
      <CategoryContextProvider>{children}</CategoryContextProvider>
      <ProductContextProvider>{children}</ProductContextProvider>
    </>
  );
};

export default GlobalContext;
