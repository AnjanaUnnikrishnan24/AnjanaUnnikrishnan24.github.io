import React from 'react';

const HeroSection = () => {
  return (
    <section id="top" className="d-flex flex-column justify-content-center align-items-center text-center bg-dark text-white vh-100 px-3">
      <h1 className="display-3 fw-bold">Anjana Unnikrishnan</h1>
      <p className="lead mt-3" style={{ maxWidth: '600px' }}>
        I'm a passionate full-stack developer skilled in building responsive and dynamic web and mobile applications using modern technologies like React, Node.js, MongoDB, and more.
      </p>
    </section>
  );
};

export default HeroSection;
