import { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./components/Main"
import Footer from "./components/Footer"
import styles from "./style";
import Navbar from "./components/Navbar";



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
    <Router>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar isTopOfPage={isTopOfPage} />
        </div>
      </div>
      <Main />
      <Footer />
    </Router>

  )
}

export default App



