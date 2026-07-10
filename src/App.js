import { useEffect, useState } from "react";
import "./App.css";
import Router from "./routes/Router";
import Aos from "aos";
import "aos/dist/aos.css";
import gotToTop from "./assets/images/plane-up-solid.svg";
function App() {
  function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setBackToTopButton(true);
        } else {
          setBackToTopButton(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    useEffect(() => {
      Aos.init({ duration: 2000, once : true});
    }, []);

    return (
      <div className="app-container">
        <Router />
        {backToTopButton && (
          <button
            className="goto-top"
            style={{
              position: "fixed",
              zIndex: "500",
              bottom: "50px",
              right: "50px",
              // fontSize: "80px",
            }}
            onClick={scrollUp}
          >
            <img src={gotToTop} alt="" style={{ width: "50%" }} />
          </button>
        )}
      </div>
    );
  }

  return <BackToTopButton />;
}

export default App;
