import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import Recipes from "./containers/Recipes"

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recipes/:slug" element={<Recipes />} />
      </Routes>
      <Footer />
    </div>
  );
}
