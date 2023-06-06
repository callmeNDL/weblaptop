import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignInPage from './pages/SignInPage';

import AppLayout from './layout/Layout';
import SignUp from './components/SignUp/SignUp';
import Promo from './pages/Promo';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product/:productId" element={<DetailPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signIn" element={<SignInPage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/promo" element={<Promo />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
