import React from "react";
import team1 from "../img/team-1.jpg";
import team2 from "../img/team-2.jpg";
import SingleTeamCard from "./SingleTeamCard";

const teamData = [
  {
    name: "Dr. Ankit Kankariya",
    designation: "B.D.S, M.D.S Pediatric Dentist",
    pic: team1,
    social: {
      twitter: "https://twitter.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
      instagram: "https://www.instagram.com/johndoe",
    },
    delay: "0.3s",
  },
  {
    name: "Jane Smith",
    designation: "Implant Surgeon",
    pic: team2,
    social: {
      twitter: "https://twitter.com/janesmith",
      facebook: "https://www.facebook.com/janesmith",
      linkedin: "https://www.linkedin.com/in/janesmith",
      instagram: "https://www.instagram.com/janesmith",
    },
    delay: "0.6s",
  },
];
function Teams() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
            <div className="section-title bg-light rounded h-100 p-5">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">
                Our Dentist
              </h5>
              <h1 className="display-6 mb-4">
                Meet Our Certified & Experienced Dentist
              </h1>
              <a href="appointment.html" className="btn btn-primary py-3 px-5">
                Appointment
              </a>
            </div>
          </div>
          {teamData.map((member, index) => {
            return <SingleTeamCard key={index} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
