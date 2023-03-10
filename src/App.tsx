import { Route, Routes } from 'react-router-dom';

import { CategoryContext, ProductContext } from './context';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Generic from './Pages/Generic';
import ProductDetails from './Pages/ProductDetail';
import FilteredProducts from './Pages/FilteredProducts';
import { FavoritesProducts } from './Pages/FavoritesProducts';

function App() {
  return (
    <>
      <CategoryContext>
        <ProductContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Categories />} />
            <Route path="/tracking" element={<Generic />} />
            <Route path="/deliveryTime" element={<Generic />} />
            <Route path="/product-detail/:id" element={<ProductDetails />} />
            <Route path="/filtered-product" element={<FilteredProducts />} />
            <Route path="/favorites" element={<FavoritesProducts />} />
          </Routes>
        </ProductContext>
      </CategoryContext>
      <Footer />
    </>
  );
}

export default App;
