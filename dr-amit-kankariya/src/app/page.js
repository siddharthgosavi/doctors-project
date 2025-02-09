"use client";
import Spinner from "./components/Spinner";
import { useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import SearchModal from "./components/SearchModal";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import About from "./components/About";
import Appointment from "./components/Appointment";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Teams from "./components/Teams";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  if (loader) return <Spinner />;
  return (
    <>
      <Topbar />
      <Navbar toggleModal={toggleModal} />
      <SearchModal toggleModal={toggleModal} open={open} />
      <Carousel />
      <Banner />
      <About />
      <Appointment />
      <Services />
      <Offer />
      <Pricing />
      <Testimonial />
      <Teams />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </>
  );
}
