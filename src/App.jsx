import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/home";
import Cart from "./components/Cart";
import Header from "./components/Header"
import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart />} />
     
    </Routes>
    </BrowserRouter> </>
  );
}

export default App
