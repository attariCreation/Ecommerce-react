import React, { useEffect, useState } from "react";
import { getUser } from "../api/productsapi";
import { Link } from "react-router-dom";
import Loader from "./loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiShoppingCart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/Cart";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getUser();
        setProducts(data);
      } catch (error) {
        toast.error(`Error: could not fetch the data ; ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="txt ml-10 font-bold text-xl">Our Products</div>

      {loading ? (
        <Loader />
      ) : (
        <ul>
          {products.map((product, index) => (
            <li className="products flex flex-col" key={index}>
              <span className="up ">
                <Link to={`/Details/${index}`}>
                  <img src={product.image} alt="product" />
                </Link>
              </span>
              <span className="dtl flex justify-between items-center">
                <span id="left">
                  <p className="dtl-txt font-bold">{product.category}</p>
                  <p className="dtl-txt">$ {product.price}</p>
                </span>
                <button
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                  }}
                  onClick={() => {
                    addToCart(product)
                    console.log(product.id)
                  }}
                  id="right"
                  className="text-xl
                  outline-hidden
                  "
                >
                  {hoveredIndex === index ? (
                    <FiShoppingCart />
                  ) : (
                    <CiShoppingCart />
                  )}
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      <ToastContainer />
    </>
  );
};

export default Products;
