import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function SingleTeamCard({ member: { name, designation, social, pic, delay } }) {

  return (
    <div className="col-lg-4 wow slideInUp" data-wow-delay={delay}>
      <div className="team-item">
        <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
          <Image className="img-fluid rounded-top w-100" src={pic} alt="" />
          <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
            <a className="btn btn-primary btn-square m-1" href={social.twitter}>
              <i className="fab fa-twitter fw-normal">
                <FaTwitter className="fw-normal" />
              </i>
            </a>
            <a
              className="btn btn-primary btn-square m-1"
              href={social.facebook}
            >
              <i className="fab fa-facebook-f fw-normal">
                <FaFacebook />
              </i>
            </a>
            <a
              className="btn btn-primary btn-square m-1"
              href={social.linkedin}
            >
              <i className="fab fa-linkedin-in fw-normal">
                <FaLinkedin />
              </i>
            </a>
            <a
              className="btn btn-primary btn-square m-1"
              href={social.instagram}
            >
              <i className="fab fa-instagram fw-normal">
                <FaInstagram />
              </i>
            </a>
          </div>
        </div>
        <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
          <h4 className="mb-2">{name}</h4>
          <p className="text-primary mb-0">{designation}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleTeamCard;
