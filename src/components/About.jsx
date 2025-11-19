import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        
        <p className="section-sub-text about-sub-text zoom_in">
          &nbsp;&nbsp;&nbsp;&nbsp; Versatile game producer and game designer, former Architect and Urbanist and Art enthusiast. Experienced in leading cross-functional teams, optimizing game production pipelines and designing engaging player experiences. 
	  <br />  <br />  &nbsp;&nbsp;&nbsp;&nbsp; As a Game Designer and Producer, I bring a unique perspective as a
          generalist, with mixed experience in production, art, game design and
          product management together. With a focus on optimizing workflows and
          aligning creative vision, I am experienced in leading cross-functional
          teams, optimizing game production pipelines, and designing engaging
          player experiences. My professional journey includes serving as a Game
          Designer, Product Manager, and Production Coordinator at Wildlife
          Studios, where I was accountable for in-game live events, coordinating
          creative teams (artists, developers), and analyzing key performance
          indicators. <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp; Furthermore, I have experience as a Product Manager at ROOM
          Interactive Systems, where I was responsible for team coordination and
          using gamification and high-quality CGI on a serious game for medicine
          purposes. I am passionate about crafting innovative gaming experiences
          and thrive when working with people in creative environments.
        </p>

        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Bianca Moreira Montesano</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Brazilian</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick={() => window.location.href = 'tel:+55(11)94948-9916'}
          >
            (+55) 11 94948 9916
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick={() => window.location.href = 'mailto:bmmontesano@gmail.com'}
          >
            bmmontesano@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">4+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">Brazilian Portuguese | English</p>
        </div>
      </section>
    </>
  );
};
export default AboutSection;