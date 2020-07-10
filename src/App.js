/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
// 1. Third-party library / (S)CSS
import React from 'react';
import WebFont from 'webfontloader';

// 2. Custom (S)CSS / Resource filess
import './App.scss';

// 3. Local modules
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import ProductListTrending from './components/ProductListTrending';
import ProductListBestSeller from './components/ProductListBestSeller';
import ProductListOnSale from './components/ProductListOnSale';
import Slider from './components/Slider';
import BackButton from './components/BackButton';
import ProductInBrand from './components/ProductInBrand';
import ShopInfo from './components/ShopInfo';
import ShopService from './components/ShopService';
import AddToCart from './components/AddToCart';
import Promotion from './components/Promotion';
import ProductListFeature from './components/ProductListFeature';
import QuickView from './components/QuicKView';


WebFont.load({
  google: {
    families: ['Roboto:400,400i,500,700'],
  },
});

export default function App() {
  return (
    // eslint-disable-next-line react/jsx-indent
    <>
      <SignIn />
      <Header />
      <Slider />
      <ProductListTrending />
      <ProductListBestSeller />
      <ProductListOnSale />
      <QuickView />
      <Promotion />
      <ProductListFeature />
      <ProductInBrand />
      <AddToCart />
      <ShopInfo />
      <ShopService />
      <Footer />
      <BackButton />
    </>
  );
}
