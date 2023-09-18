import { useState, useEffect } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import styles from "./style";


const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        console.log(window.scrollY);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Header isTopOfPage={isTopOfPage} />
        </div>
      </div>
      <Main />
      <Footer />

    </>
  )
}

export default App
