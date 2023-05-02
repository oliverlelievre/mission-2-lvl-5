import Navbar from "./components/Navigation/Navbar";
import Dialogflowchat from "./components/ChatBot/Dialogflowchat";
import Footer from "./components/Footer/Footer";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Dialogflowchat />
      <Footer></Footer>
    </>
  );
}

export default App;
