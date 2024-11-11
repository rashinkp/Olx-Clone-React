import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Menubar from "./Menubar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  const getProducts = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Menubar setMenu={setMenu} />
      {loading ? (
        <div className="text-2xl text-center mt-8">Loading...</div>
      ) : (
        <Home products={products} search={search} menu={menu} />
      )}
      <Footer />
    </>
  );
};

export default Main;
