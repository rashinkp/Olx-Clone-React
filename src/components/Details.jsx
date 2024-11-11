import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import Footer from "./Footer";

const Details = () => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <>
      <Navbar />
      <Menubar />
      <div className="p-5 grid grid-flow-col grid-cols-2 gap-10">
        <div className="border border-black flex justify-center p-5">
          <img className="w-60 h-auto object-contain" src={data.image} alt="" />
        </div>
        <div className="border border-black p-5">
          <h1 className="font-bold text-3xl">${data.price}</h1>
          <h1 className="font-semibold text-xl mt-3">{data.title}</h1>
          <h1 className="mt-3 ">{data.description}</h1>
          <h1 className="mt-3">{data.category}</h1>
          <h1 className="mt-3 font-semibold">{data.rating.rate}</h1>
          <h1 className="font-semibold">{data.rating.count}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
