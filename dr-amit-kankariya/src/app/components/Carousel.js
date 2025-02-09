import React from "react";
import carousel1 from "../img/carousel-1.jpg";
import carousel2 from "../img/carousel-2.jpg";
import Image from "next/image";
function Carousel() {
  return (
    <div className="container-fluid p-0">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image className="w-100 h-75" src={carousel1} alt="Image" />
            <div
              className="carousel-caption w-100 h-100 d-flex flex-column align-items-center justify-content-center"
              style={{ marginLeft: "-286px" }}
            >
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Keep Your Teeth Healthy
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Take The Best Quality Dental Treatment
                </h1>
                <a
                  href="appointment.html"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Appointment
                </a>
                <a
                  href=""
                  className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image className="w-100  h-75" src={carousel2} alt="Image" />
            <div
              className="carousel-caption w-100 h-100 d-flex flex-column align-items-center justify-content-center"
              style={{ marginLeft: "-228px" }}
            >
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Keep Your Teeth Healthy
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Take The Best Quality Dental Treatment
                </h1>
                <a
                  href="appointment.html"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Appointment
                </a>
                <a
                  href=""
                  className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
