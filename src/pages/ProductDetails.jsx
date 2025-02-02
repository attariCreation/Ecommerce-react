import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"; 
import { getUserById } from '../api/productsapi'
const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getUserById(id)
      setProduct(data);
    }
    fetchProduct();
  }, [id])
  console.log(product)
  return (
   <main className='flex flex-col items-center justify-center overflow-hidden'>
    <div id='product-detail-img'className='rounded-xl'>
      <img src={product.image} alt="" />
    </div>

    <div className="properties">
      <h3 className='font-bold text-xl capitalize bg-amber-100'>category : {product.category}</h3>
    </div>
    <div className="properties text-center">
      <h4 className='font-bold text-2xl capitalize my-3'>description :</h4>
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

export default ProductDetails