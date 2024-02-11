import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
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

export default App;
