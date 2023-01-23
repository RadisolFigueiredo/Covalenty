import { Route, Routes } from 'react-router-dom';

import GlobalContext from './context';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Tracking from './Pages/Tracking';

function App() {
  return (
    <GlobalContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Categories />} />
        <Route path="/tracking" element={<Tracking />} />

        <Route path="/deliveryTime" element={<Tracking />} />
      </Routes>
      <Footer />
    </GlobalContext>
  );
}

export default App;
