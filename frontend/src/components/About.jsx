import React from 'react'

const About = () => (
  <section id="about" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="/images/anjana.jpg"
            alt="Anjana Unnikrishnan"
            className="rounded-circle img-fluid"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <p className="lead text-center text-md-start">
            I'm a passionate and creative full stack web developer based in  Ernakulam 
            I leverage my eye for design and strong problem-solving skills to build
            modern, user-friendly, and responsive web applications.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
