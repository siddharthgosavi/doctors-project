import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonial() {
  // ✅ Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button className="custom-arrow nextArrow" onClick={onClick} style={{right: '-80px'}}>
      <FaArrowRight />
    </button>
  );
  
  // ✅ Custom Prev Arrow
  const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow prevArrow" onClick={onClick} style={{left: '-80px'}}>
      <FaArrowLeft />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
  
  return (
    <div
      id="testimonial"
      className="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{maxHeight: '700px'}}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
           
            <div
              className="testimonial-carousel rounded p-5 wow zoomIn"
              data-wow-delay="0.6s"
              style={{maxHeight: '500px'}}
            >
            <Slider {...settings} >
              <div className="testimonial-item text-center text-white carousel-slide" >
                <img
                  className="img-fluid mx-auto rounded mb-4"
                  src={testimonial1.src}
                  alt=""
                />
                <p className="fs-5">
                  Dolores sed duo clita justo dolor et stet lorem kasd dolore
                  lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                  erat. Erat dolor rebum sit ipsum.
                </p>
                <hr className="mx-auto w-25" />
                <h4 className="text-white mb-0">Client Name</h4>
              </div>
              <div className="testimonial-item text-center text-white carousel-slide">
                <img
                  className="img-fluid mx-auto rounded mb-4"
                  src={testimonial2.src}
                  alt=""
                />
                <p className="fs-5">
                  Dolores sed duo clita justo dolor et stet lorem kasd dolore
                  lorem ipsum. At lorem lorem magna ut et, nonumy labore diam
                  erat. Erat dolor rebum sit ipsum.
                </p>
                <hr className="mx-auto w-25" />
                <h4 className="text-white mb-0">Client Name</h4>
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
