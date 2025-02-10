import React from "react";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light py-5 wow fadeInUp"
        data-wow-delay="0.3s"
        style={{ marginTop: "-75px" }}
      >
        <div className="container pt-5">
          <div className="row g-5 pt-4">
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2">
                    <MdOutlineArrowRightAlt />
                  </i>
                  Home
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2">
                    <MdOutlineArrowRightAlt />
                  </i>
                  About Us
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2">
                    <MdOutlineArrowRightAlt />
                  </i>
                  Our Services
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2">
                    <MdOutlineArrowRightAlt />
                  </i>
                  Latest Blog
                </a>
                <a className="text-light" href="#">
                  <i className="bi bi-arrow-right text-primary me-2">
                    <MdOutlineArrowRightAlt />
                  </i>
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"><FaLocationArrow/></i>Dental Clinic in Somwar Peth, Pune, Maharashtra, India.
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open text-primary me-2"><FaEnvelopeOpen/></i>
                amit.kankariya@dentcare.com
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone text-primary me-2">
                  <FaPhoneAlt />
                </i>
                +91 9226156789
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i className="fab fa-twitter fw-normal">
                    <FaTwitter />
                  </i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f fw-normal">
                    <FaFacebook />
                  </i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in fw-normal">
                    <FaLinkedin />
                  </i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href="#"
                >
                  <i className="fab fa-instagram fw-normal">
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-light py-4"
        style={{ backgroundColor: "#051225" }}
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <a className="text-white border-bottom" href="#">
                  Dr. Amit Kankariya
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Developed by{" "}
                <a
                  className="text-white border-bottom"
                  href="https://portfolio-16nw8allb-siddharthgosavi.vercel.app/"
                >
                  Siddharth S Gosavi
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
