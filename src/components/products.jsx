import React, { useEffect, useState } from "react";
import { getUser } from "../api/productsapi";
import { Link } from "react-router-dom";
const Products = () => {

    const [products, setProducts] = useState([]);

    
    
      // Fetch data when the component mounts
      useEffect(() => {
        const fetchProducts = async () => {
          const data = await getUser();
          setProducts(data)
        }
        fetchProducts();
      }, []);

  return (
    <>
   <div className="txt ml-10 font-bold text-xl">Our Product</div>

    <ul>
    {products.map((products, index)=> {
        // console.log(e.price)
        return(
            <li className="products" key={index}>
                <span className="up">
                <Link to={`/Details/${index}`}>
                <img src={products.image} alt="product" />
        
                </Link>
                </span>
                <span className="dtl">
                    <p className="dtl-txt font-bold ">
                        {products.category}
                    </p>
                    <p className="dtl-txt">
                        $ {products.price}
                    </p>
                </span>
            </li>
        )
    })}
    </ul>
    </>
  )
};

export default Products;
