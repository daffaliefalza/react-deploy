import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/landing-page";
import Product from "./pages/product";
import DetailProduct from "./pages/detail-product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Product />} path="/product" />
        <Route path="/detail-product" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
