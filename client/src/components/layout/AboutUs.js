import React from "react";
import "./AboutUs.css";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Shreya Goel",
      email: "shreya.goel@mca.christuniversity.in",
      phoneNumber: "+91-9560543289",
      links: {
        linkedin: "https://www.linkedin.com/in/shreya-goel-94694422a/",
        github: "https://github.com/Shreya-1802",
      },
    },
    {
      name: "Jagrati Jain",
      email: "jagrati.jain@mca.christuniversity.in",
      phoneNumber: "+91-6377456224",
      links: {
        linkedin: "https://www.linkedin.com/in/jagrati-jain-006403232/",
        github: "https://github.com/jagratijain",
      },
    },
    {
      name: "Aditi Patel",
      email: "aditi.patel@mca.christuniversity.in",
      phoneNumber: "+91-9131730308",
      links: {
        linkedin: "https://www.linkedin.com/in/aditi-patel-a9b03a241/",
        github: "https://github.com/Aditipatel0811",
      },
    },
  ];

  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>
        We are a team of three passionate developers who are dedicated to building innovative and user-friendly web applications. We have a combined experience of over 10 years in the industry, and we have worked on a wide range of projects, from small startups to large enterprises.
      </p>
      <section className="team-members">
        <h2>Our Team</h2>
        <ul>
          {teamMembers.map((teamMember, index) => (
            <li key={index}>
              <h3>{teamMember.name}</h3>
              <p>
                {teamMember.email}
                <br />
                {teamMember.phoneNumber}
              </p>
              <ul className="social-links">
                <li>
                  <a href={teamMember.links.linkedin}>LinkedIn</a>
                </li>
                <li>
                  <a href={teamMember.links.github}>GitHub</a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutUsPage;
