import { createContext, ReactNode, useState } from 'react';

export type CategoryType = {
  id: number;
  name: string;
  image: string;
  creationAt: Date | string;
  updatedAt: Date | string;
};

export type ProductByCategoryType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: [string];
  creationAt: Date | string;
  updatedAt: Date | string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: Date | string;
    updatedAt: Date | string;
  };
};

interface CategoryContextType {
  mainCategories: CategoryType[];
  setMainCategories: (categories: CategoryType[]) => void;
  allProductByCategory: ProductByCategoryType[];
  setAllProductByCategory: (categories: ProductByCategoryType[]) => void;
}

interface PropsCategoryContext {
  children: ReactNode;
}

const initialState: CategoryType[] = [];

const CategoryContext = createContext<CategoryContextType>({
  mainCategories: initialState,
  setMainCategories: (categories: CategoryType[]) => {},
  allProductByCategory: [],
  setAllProductByCategory: (categories: ProductByCategoryType[]) => {},
});

const CategoryContextProvider = ({ children }: PropsCategoryContext) => {
  const [mainCategories, setMainCategories] =
    useState<CategoryType[]>(initialState);
  const [allProductByCategory, setAllProductByCategory] = useState<
    ProductByCategoryType[]
  >([]);

  return (
    <CategoryContext.Provider
      value={{
        mainCategories,
        setMainCategories,
        allProductByCategory,
        setAllProductByCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContextProvider };
export default CategoryContext;
