import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

//adding each sections of the webpag
import Banner from "./Components/Banner/Banner";
import UserProfile from "./Components/profile";
import Footer from "./Components/Footer/Footer";
import News from "./Pages/News";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";
import { NavbarSection } from "./Components/Navbar/Navbar";
import withLoading from "./Constants/withLoading";
import NewsDesc from "./Pages/Detailed-news/NewsDesc";
import Education from "./Pages/Education/Education";
import About from "./Pages/AboutSection/About";
import { options } from "./Constants/customstyle";

import Brokers from "./Pages/Brokers/Brokers";
import EducationNav from "./Pages/Education/EducationNavbar/EducationNav";
import EduFooter from "./Pages/Education/EducationFooter/EduFooter";
import { ParallaxProvider } from "react-scroll-parallax";
import { FadeLoader } from "react-spinners";

function App() {
  // Prevent from right Click method
  // window.addEventListener(
  //   "contextmenu",
  //   function (e) {
  //     e.preventDefault();
  //   },
  //   false
  // );

  const HomeWithLoading = withLoading(Home);
  const ContactWithLoading = withLoading(Contact);
  const NewsWithLoading = withLoading(News);
  const AboutWithLoading = withLoading(About);
  const BrokersWithLoading = withLoading(Brokers);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Appcolor-block-5">
      <AnimatedCursor {...options} />
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavbarSection />
                  <HomeWithLoading delay={500} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/news"
              element={
                <>
                  <NavbarSection />
                  <NewsWithLoading delay={600} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/news/:newsId"
              element={
                <>
                  <NavbarSection />
                  <NewsDesc />
                  <Footer />
                </>
              }
            />

            <Route
              path="*"
              element={
                <>
                  {" "}
                  <NavbarSection />
                  <ErrorPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact-us"
              element={
                <>
                  <NavbarSection />
                  <ContactWithLoading delay={800} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about-us"
              element={
                <>
                  <NavbarSection />
                  <AboutWithLoading delay={500} /> <Footer />
                </>
              }
            />

            <Route
              path="/education-Educate-yourself"
              element={
                loading ? (
                  <div className="body">
                    <FadeLoader className="loader-container" color="#5e2ced" />
                  </div>
                ) : (
                  <>
                    <EducationNav />
                    <Education />
                    <EduFooter />
                  </>
                )
              }
            />
            <Route
              path="/brokers-list"
              element={
                <>
                  <NavbarSection />
                  <BrokersWithLoading />
                  <Footer />
                </>
              }
              delay={1000}
            />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
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
