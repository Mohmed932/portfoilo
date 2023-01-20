import React, { lazy, Suspense } from "react";
import "../App.css";
const About = lazy(() => import("../components/About/About"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Education = lazy(() => import("../components/Education/Education"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Home = lazy(() => import("../components/Home/Home"));
const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const Project = lazy(() => import("../components/Project/Project"));
const Loading = lazy(() => import("../components/Loading/Loading.js"));

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default Page;
