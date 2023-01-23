import { createContext, ReactNode, useState } from 'react';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
};

interface ProductContextType {
  allProducts: ProductType[];
  setAllProducts: (products: ProductType[]) => void;
}

interface PropsCategoryContext {
  children: ReactNode;
}

const initialState: ProductType[] = [];

const ProductContext = createContext<ProductContextType>({
  allProducts: initialState,
  setAllProducts: (products: ProductType[]) => {},
});

const ProductContextProvider = ({ children }: PropsCategoryContext) => {
  const [allProducts, setAllProducts] = useState<ProductType[]>(initialState);

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        setAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider };
export default ProductContext;
