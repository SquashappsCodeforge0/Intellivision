import React, { useEffect } from "react";
import Section1 from "../firstSection/firsthSection";
import Section2 from "../secondSection/secondSection";
import Section3 from "../thirdSection/thirdSection";
import Section4 from "../fourthSection/fourthSection";

const Home = () => {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth'});
          }
        }
      }, []);

    return(
        <>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </>
    )

}
export default Home