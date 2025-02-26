import React, { useEffect } from "react";
import Products from "../components/products";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/loginSlice";

const Home = () => {
  const { isLogin, token, userName} = useSelector(state => state.login); // ✅ Removed unnecessary 'token'
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {  
      navigate('/login');
      dispatch(logoutUser())

    }

  }, [isLogin, navigate]); // ✅ 

  return (
    <>
      <Header userName={userName} /> 
      <Hero />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
