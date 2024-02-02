import { React, useEffect, useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "animate.css";
//adding each sections of the webpage
import Banner from "./Components/Banner/Banner";
// import { NavbarSection } from "./Components/Navbar/Navbar";
import UserProfile from "./Components/profile";
import Practise from "./Components/Navbar/practise";
import Footer from "./Components/Footer/Footer";
import News from "./Pages/News";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";
import { NavbarSection } from "./Components/Navbar/Navbar";
import Loading from "./Pages/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsHide(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      children: [{ path: "/news", Component: <News /> }],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <NavbarSection isHide={isHide} />
        <Routes>
          <Route path="/" element={loading ? <Loading /> : <Home />} />
          <Route path="/news" element={<Practise />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer isHide={isHide} />
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Banner />
      <UserProfile />
    </div>
  );
};

export default App;
