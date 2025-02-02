import React, { useEffect, useState } from "react";
import { getUser } from "../api/productsapi";
import { Link } from "react-router-dom";
import Loader from "./loader";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getUser();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="txt ml-10 font-bold text-xl">Our Products</div>

      {loading ? (<Loader />) : (
        <ul>
          {products.map((product, index) => (
            <li className="products" key={index}>
              <span className="up">
                <Link to={`/Details/${index}`}>
                  <img src={product.image} alt="product" />
                </Link>
              </span>
              <span className="dtl">
                <p className="dtl-txt font-bold">{product.category}</p>
                <p className="dtl-txt">$ {product.price}</p>
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
