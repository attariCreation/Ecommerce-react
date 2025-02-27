import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/loginSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cart} = useSelector((state) => state.cart)
  const {token } = useSelector(state => state.login)
  // useEffect(() => {
  //   console.log("cart", cart, "fn", removeFromCart);
  // }, [cart]);

  useEffect(() => {
    if(!token){
      navigate('/login')
      dispatch(logoutUser())
    }
  } , [token])
  return (
    <>
      <Header />
    <main className="flex flex-col items-center justify-center !w-screen !p-10">

      {/* Cart Title */}
      <h1 className="!text-2xl !font-bold !font-montserrat !mb-5">
        🛒 Your Cart
      </h1>

      {/* Product List */}
      <ul className="!w-[90vw] !bg-white !rounded-lg !shadow-lg !p-5 !space-y-4 flex flex-col justify-center items-center overflow-hidden">
        <h2 className="!text-xl !font-DMMono  !font-bold !text-gray-800">
          Products:
        </h2>{" "}
        <br />
        <div id="img-cont" className="grid grid-cols-3 gap-5 ">
          {cart.map((product) => (
            <li
              key={product.id}
              className="!flex !justify-between !items-center !border !border-gray-300 !p-[20px] !w-90 !rounded-md overflow-hidden !h-30"
            >
              {/* Product Image */}
              <div className="!mr-10">
                <img
                  className="!w-[100px]  object-cover !rounded-md"
                  src={product.image}
                  alt="product"
                />
              </div>

              {/* Product Details */}
              <div className="!flex !flex-col">
                <span className="!text-lg !font-semibold">
                  {product.category}
                </span>
                <span className="!text-gray-700">💲 {product.price}</span>
                <span className="!text-yellow-500">
                  ⭐ {product.rating.rate}
                </span>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => {
                  dispatch(removeFromCart(product.id))
                  console.log(product)
                }}
                className="!px-3 !py-1 !bg-red-500 !text-white !font-bold !rounded-md !hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </div>
      </ul>
    </main>
    </>
  );
};

export default Cart;
