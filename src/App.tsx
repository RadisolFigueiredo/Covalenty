import { Route, Routes } from 'react-router-dom';

import GlobalContext from './context';

import Footer from './components/Footer';
import Header from './components/Header';

import Categories from './Pages/Categories';
import Home from './Pages/Home';

function App() {
  return (
    <GlobalContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Categories />} />
      </Routes>
      {/* <Footer /> */}
    </GlobalContext>
  );
}

export default App;
