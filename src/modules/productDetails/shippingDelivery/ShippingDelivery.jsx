import React from "react";
import "./ShippingDelivery.css";

const ShippingDelivery = () => {
  const listItems = [
    {
      id: "1",
      para: "Vestibulum penatibus nunc dui adipiscing convallis bulum parturient.",
    },
    {
      id: "2",
      para: "Vestibulum penatibus nunc dui adipiscing convallis bulum parturient.",
    },
    {
      id: "3",
      para: "Vestibulum penatibus nunc dui adipiscing convallis bulum parturient.",
    },
  ];
  return (
    <div>
      <h5>Shipping delivery</h5>
      <p className="mt-3 mb-5">
        Venenatis duis tristique accumsan netus enim in posuere torquent ut
        ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis v
        iverra tellus ridiculus a sed vestibulum dapibus. Ante a mollis habitant
        duis urna cum iaculis ullamcorper luctus.
      </p>
      <h5 className="mb-3">Details For The Shipment</h5>
      {listItems.map((items) => (
        <div className="arow-item" key={items.id}>
          <p>{items.para}</p>
        </div>
      ))}
      <p className="mt-4">Scelerisque adipiscing bibendum sem vestibulum et in a a a 
        purus lectus faucibus lobortis tincidunt purus lectus nisl 
        class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac 
        parturient scelerisque vestibulum amet elit ut volutpat.</p>
    </div>
  );
};
export default ShippingDelivery;
