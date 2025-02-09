import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css";
import price1 from "../img/price-1.jpg";
import price2 from "../img/price-2.jpg";
import price3 from "../img/price-3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Root Canal",
    price: "$99",
    image: price1.src,
    features: ["Modern Equipment", "Professional Dentist", "24/7 Call Support"],
  },
  {
    id: 2,
    title: "Teeth Whitening",
    price: "$35",
    image: price2.src,
    features: ["Modern Equipment", "Professional Dentist", "24/7 Call Support"],
  },
  {
    id: 3,
    title: "Dental Implant",
    price: "$95",
    image: price3.src,
    features: ["Modern Equipment", "Professional Dentist", "24/7 Call Support"],
  },
];

// ✅ Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button className="custom-arrow nextArrow" onClick={onClick}>
    <FaArrowRight />
  </button>
);

// ✅ Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prevArrow" onClick={onClick}>
    <FaArrowLeft />
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />, // ✅ Fixed this
  prevArrow: <PrevArrow />, // ✅ Fixed this
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="carousel-slide">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-info position-relative">
              <div
                className=" price d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute start-50 translate-middle"
                style={{ zIndex: 2 }}
              >
                <h2 className="text-primary m-0">$35</h2>
              </div>
              <h4>{service.title}</h4>
              <hr class="text-primary w-50 mx-auto mt-0" />

              <ul>
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    class="d-flex justify-content-between mb-3 px-4"
                  >
                    <span>{feature}</span>
                    <i class="fa fa-check text-primary pt-1">✔</i>
                  </div>
                ))}
              </ul>
              {/* ✅ Fixed Appointment Button Position */}
              <button className="appointment-btn">Appointment</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
