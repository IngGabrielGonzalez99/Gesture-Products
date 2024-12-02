import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Routes, Route } from "react-router-dom";

import Login from './Components/Login/Login';
import { InventoryManagment } from './Pages/Administrator/Inventory/InventoryManagment';
import Dashboard from './Pages/Administrator/Dashboard';
import { Users } from './Pages/Administrator/Users/Users';
import { DashboardSeller } from './Pages/Seller/Dashboard/DashboardSeller';
import { SellProduct } from './Pages/Seller/SellProduct/SellProduct';
import { InventoryManagmentSeller } from './Pages/Seller/InventoryManagmentSeller/InventoryManagmentSeller';
import SellerAdministrator from './Pages/Administrator/SellerAdministrator/SellerAdministrator';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Administrator Routes */}
        <Route path="/DashboardAdministrador" element={<Dashboard />} />
        <Route path="/InventoryManagment" element={<InventoryManagment />} />
        <Route path="/Users" element={<Users />} />
        <Route path='/SellAdminProduct' element={<SellerAdministrator/>}/>


        {/* Seller Routes */}
        <Route path="/DashboardSeller" element={<DashboardSeller />} />
        <Route path="/SellProduct" element={<SellProduct />} />
        <Route path="/InventoryManagmentSeller" element={<InventoryManagmentSeller/>} />


        <Route path="*" element={<h1>404: Página no encontrada</h1>} />
      </Routes>
    </div>
  );
} 

export default App;
