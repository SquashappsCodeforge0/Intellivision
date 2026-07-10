import React from "react";
import "./purchase.css";
import Checks from "../checkPointComponent/check";
import CommonButton from "../../commonButton/commonButton";

export default function Purchase({ price }) {
  const checkData = [
    { id: "1", para: "50 Image generations" },
    { id: "2", para: "500 Credits " },
    { id: "3", para: "Monthly 100 Credits Free" },
    { id: "4", para: "Customer Support" },
    { id: "5", para: "50GB Cloud Storage" },
  ];
  return (
    <div className="data-container">
      <h1 className="text-center ">${price}</h1>
      <div className="price-bg">
        {checkData.map((items) => (
          <Checks data={items.para} key={items.id}/>
        ))}
      </div>
      <div className="mt-4">
        <CommonButton fontClr="#FFFFFF" color="#170F58" label="Purchase Now" />
      </div>
    </div>
  );
}
