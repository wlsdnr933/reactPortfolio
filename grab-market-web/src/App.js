import "./App.css";
import MainPageComponent from "./main";
import { Routes, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import "antd/dist/antd.css";

export default function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPageComponent />}></Route>
          <Route path="/products/:id" element={<ProductPage />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}
