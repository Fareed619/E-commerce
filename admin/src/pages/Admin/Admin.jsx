import Sidebar from "../../components/sidebar/Sidebar";
import "./admin.css";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../components/addProduct/AddProduct.jsx";
import ListProduct from "../../components/listProduct/ListProduct.jsx";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
