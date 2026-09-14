import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Mission from "./pages/Mission";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import News from "./pages/News";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function Placeholder({ title }: { title: string }) {
  return (
    <main className="min-h-screen bg-[#050817] px-6 py-32 text-center text-white">
      <h1 className="font-['Poppins'] text-4xl font-bold text-[#4DD0E1]">
        {title}
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-[#AEB9CD]">
        This page is currently being developed.
      </p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050817] text-white">

        {/* SCROLL TO TOP ON PAGE CHANGE */}
        <ScrollToTop />

        {/* GLOBAL NAVBAR */}
        <Navbar />

        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/programs" element={<Programs />} />

          <Route path="/mission" element={<Mission />} />

          <Route path="/impact" element={<Impact />} />

          <Route path="/get-involved" element={<GetInvolved />} />

          <Route path="/volunteer" element={<Volunteer />} />

          <Route path="/donate" element={<Donate />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/news" element={<News />} />

          {/* 404 */}
          <Route
            path="*"
            element={<Placeholder title="Page Not Found" />}
          />
        </Routes>

        {/* GLOBAL FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;