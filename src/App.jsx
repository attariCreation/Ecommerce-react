import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/home";
import Cart from "./components/Cart";
import Login from './pages/Login'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>
        <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Details/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path='/Login' element={<Login />} />  
    </Routes>
    </Router>
     </>
  );
}

export default App
