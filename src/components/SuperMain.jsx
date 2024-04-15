import About from "./About";
import Blog from "./Blog";
import MyFooter from "./MyFooter";
import Home from "./Home";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Services from "./Services";
import Contact from "./Contact";

function SuperMain() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Blog />
      <Newsletter />
      <Contact />
      <MyFooter />
    </div>
  );
}

export default SuperMain;
