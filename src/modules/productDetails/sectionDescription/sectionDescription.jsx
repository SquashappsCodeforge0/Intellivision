import React from "react";
import './sectionDescription.css'

const SectionDescribe = () => {
  const tabs = [
    {
      id: "1",
      head: "Iphone",
      para: "Nunc per mollis pot enti amet imperdiet blandit dis eu sociosquaccumsan dap ibus ultricies tristique montes a deros adipiscing ajusto. Aliquet mus a aptent ullamcorper metus accumsan. Habitasse apurus nec ipsum a urna ac ullamcorper. Consectetur parturient adimperdiet torquent dui dis eu sociosqu accumsan accumsan dapibusultricies. Maecenas iaculis viverra tellus ridiculus a sedvestibulum dapibur.",
    },
    {
      id: "2",
      head: "Designed for durability",
      para: " With Ceramic Shield, tougher than any smartphone glass. Waterresistance.2 Surgical-grade stainless steel. 6.1″ and 6.7″ displaysizes.3 All in four Pro colors.",
      listItems: ["durability", "durability", "durability"],
    },
    {
      id: "3",
      head: "Glanceable lockscreen",
      para: "Now your Lock Screen is always glanceable, so you don’t even have totap it to stay in the know.",
    },
  ];

  return (
    <>
      <div className="row">
        {tabs.map((items) => (
          <div className="col-lg-4" key={items.id}>
            <h4>{items.head}</h4>
            <p>{items.para}</p>
            {items.listItems && (
              <div>
                {items.listItems.map((item) => (
                  <p key={item} className="list-items">{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default SectionDescribe;
