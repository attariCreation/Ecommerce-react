import React, { useEffect, useState } from "react";
import { getUser } from "../api/productsapi";
import { Link } from "react-router-dom";
import Loader from "./loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiShoppingCart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const notify = () => {
    toast.success("Operation successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getUser();
        setProducts(data);
      } catch (error) {
        toast.error(`Error: could not fetch the data ; ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: "#C0392B", // Customize error toast background
            color: "#ECF0F1", // Customize text color
          },
        });
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
                    dispatch(addToCart(product));
                    notify();
                  }}
                  id="right"
                  className="text-xl outline-hidden"
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        style={{
          background: "#34495E", // Customize toast container background
          color: "#ECF0F1", // Customize text color
        }}
      />
    </>
  );
};

export default Products;
