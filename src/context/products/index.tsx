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
  favoritesProducts: ProductType[];
  addFavorite: (product: ProductType) => void;
  removeFavorite: (productId: number) => void;
}

interface PropsCategoryContext {
  children: ReactNode;
}

const initialState: ProductType[] = [];

const ProductContext = createContext<ProductContextType>({
  allProducts: initialState,
  setAllProducts: (products: ProductType[]) => {},
  favoritesProducts: initialState,
  addFavorite: (product: ProductType) => {},
  removeFavorite: (productId: number) => {},
});

const ProductContextProvider = ({ children }: PropsCategoryContext) => {
  const [allProducts, setAllProducts] = useState<ProductType[]>(initialState);
  const [favoritesProducts, setFavoritesProducts] =
    useState<ProductType[]>(initialState);

  const addFavorite = (product: ProductType) => {
    setFavoritesProducts([...favoritesProducts, product]);
  };

  const removeFavorite = (productId: number) => {
    setFavoritesProducts(
      favoritesProducts.filter((item) => productId !== item.id)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        setAllProducts,
        favoritesProducts,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider };
export default ProductContext;
