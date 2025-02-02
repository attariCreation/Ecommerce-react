import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Header from "./components/Header"
import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details/:id" element={<ProductDetails/>}/>
     
    </Routes>
    </BrowserRouter> </>
  );
}

export default App
