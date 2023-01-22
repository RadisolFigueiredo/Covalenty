import { CategoryContextProvider } from './categories';

const GlobalContext = ({ children }: any) => {
  return <CategoryContextProvider>{children}</CategoryContextProvider>;
};

export default GlobalContext;
