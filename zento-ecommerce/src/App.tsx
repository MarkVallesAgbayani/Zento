import "./App.css";

import Hero from "./Components/Hero";
import Information from "./Components/Information";
import Trends from "./Components/Trends";
import Collections from "./Components/Collections";
import Footer from "./Components/Footer";
import Explore from "./Pages/Explore";
import ShopNow from "./Pages/ShopNow";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
      <Information />
      <Trends />
      <Collections />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/shopnow" element={<ShopNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
