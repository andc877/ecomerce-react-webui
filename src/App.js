import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

import Navbar from './Navbar/navbar';
import Hro from './Hero/Hero'; 
import Hero from './Hero/Hero';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero/>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':prudctId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>

      {/* <Header />
            <main>
        <p>Welcome to my React application!</p>
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
