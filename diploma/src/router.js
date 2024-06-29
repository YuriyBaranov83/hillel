import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductsPreview from "./pages/ProductsPreview";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const Router = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute/>}>
        <Route path="/products" element={<Products />} />
        <Route path="/products-preview" element={<ProductsPreview />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
