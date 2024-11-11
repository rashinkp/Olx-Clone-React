import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Menubar from "./Menubar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
const Main = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')
  const [menu,setMenu] = useState('')
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Menubar setMenu={setMenu} />
      <Home products={products} search={search} menu={menu} />
      <Footer />
    </>
  );
};

export default Main;
