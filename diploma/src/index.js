import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
// import ProductsPreview from './pages/ProductsPreview';
// import Products from './pages/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    {/* <Products/> */}
    {/* <ProductsPreview/> */}
  </React.StrictMode>
);


