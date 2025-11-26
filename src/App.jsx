import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="brand-base min-h-screen flex flex-col">
        <Navigation />
        <Analytics />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
