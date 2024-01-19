import { React } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'animate.css'
//adding each sections of the webpage
import Banner from "./Components/Banner/Banner";
import { NavbarSection } from "./Components/Navbar/Navbar";
import UserProfile from "./Components/profile";
import YourComponent from "./Components/Navbar/practise";

function App() {
  const router = createBrowserRouter([{ path: "/", Component: Home }]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <NavbarSection />
      <Banner />
       <UserProfile />
  
    </div>
  );
};

export default App;
