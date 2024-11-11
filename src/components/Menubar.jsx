import React from "react";

const Menubar = (props) => {
  return (
    <div className="flex gap-6 justify-center mt-2">
      <h1 className="cursor-pointer" onClick={() => props?.setMenu("Shirt")}>
        Shirt
      </h1>
      <h1 className="cursor-pointer" onClick={() => props?.setMenu("Jacket")}>
        Jacket
      </h1>
      <h1 className="cursor-pointer" onClick={() => props?.setMenu("Phone")}>
        Phone
      </h1>
      <h1 className="cursor-pointer" onClick={() => props?.setMenu("House")}>
        House
      </h1>
      <h1 className="cursor-pointer" onClick={() => props?.setMenu("Scooter")}>
        Scooter
      </h1>
      <h1 className="cursor-pointer" onClick={() => props?.setMenu("Bike")}>
        Bike
      </h1>
      <h1
        className="cursor-pointer"
        onClick={() => props?.setMenu("Apartments")}
      >
        Apartments
      </h1>
    </div>
  );
};
export default Menubar;
