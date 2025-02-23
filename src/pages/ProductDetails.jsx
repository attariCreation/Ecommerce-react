import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 
import { getUserById } from '../api/productsapi';
import Loader from '../components/loader';
import { ToastContainer, toast } from "react-toastify";
import Header from '../components/Header'
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getUserById(id);
        setProduct(data);
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      } finally {
        setLoading(false);
        console.log(product)
      }
    };
    fetchProduct();
  }, [id]);
  useEffect(()=> {
    console.log(product)
  }, [product])
  return (
    <>
    <Header />
      {loading ? 
        (<Loader />) :
        (

          <main className='flex flex-col items-center justify-center overflow-hidden'>
            <div id='product-detail-img' className='rounded-xl'>
              <img src={product.image} alt="product" />
            </div>

            <div className="properties">
              <h3 className='font-bold text-xl capitalize bg-amber-100'>
                Category: {product.category}
              </h3>
            </div>
            <div className="properties text-center">
              <h4 className='font-bold text-2xl capitalize my-3'>Description:</h4>
              <p className='font-light text-xl'>
                {product.description}
              </p>
            </div>
            <div className="properties price bg-zinc-300 rounded-xl font-bold">
              <span>${product.price}</span>
            </div>
          </main>
        )
      }
      <ToastContainer />
    </>
  );
};

export default ProductDetails;
