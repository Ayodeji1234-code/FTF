
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

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

function NotFound() {
  return (
    <main className="ftf-page">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative flex min-h-[70vh] items-center justify-center py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Page Not Found
            </p>

            <h1 className="mt-4 text-6xl font-extrabold text-white sm:text-7xl">
              404
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              The page you're looking for doesn't exist or may have moved.
            </p>

            <Link
              to="/"
              className="ftf-btn-primary mt-8 inline-flex"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050817] text-white">
        <ScrollToTop />

        <Navbar />

        <Routes>
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

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

