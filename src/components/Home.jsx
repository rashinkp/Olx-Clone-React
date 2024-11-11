import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {props?.products?.filter((data) => {
        return data?.title?.includes(props?.search ? props.search : props.menu)
      }).map((data) => {
        return (
          <Link key={data.id} to='/details' state={{data:data}} className="border border-gray-300 p-5 cursor-pointer ">
            <div className="flex justify-center max-h-32">
              <img
                className="w-22 h-22 object-contain"
                src={data.image}
                alt=""
              />
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-md">${data?.price}</h1>
              <h1 className="font-semibold">{data?.title}</h1>
              <h1 className="font-extralight">{data?.category}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
