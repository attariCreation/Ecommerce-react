import React from "react";
import Products from "../components/products";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import Header from '../components/Header'
const Home = () => {
  return (
    <>
    <Header /> 
      <Hero />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
