import React from 'react';
import { Container } from 'react-bootstrap';

const educationData = [
  {
    course: 'PG Diploma in Blockchain Technology',
    college: 'Kerala Blockchain Academy',
    university: 'Digital University Kerala',
    year: 'Ongoing',
  },
  {
    course: 'Full Stack Development (Training)',
    college: 'Rogersoft Technologies',
    university: '–',
    year: 'Aug 2023 – Nov 2023',
  },
  {
    course: 'B.Tech in Information Technology',
    college: 'School of Engineering',
    university: 'CUSAT',
    year: '2020',
  },
];

const Education = () => (
  <section id="education" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
    <Container>
      <h2 className="text-center fw-bold mb-5">Education</h2>
      <div className="position-relative ps-3">
        {/* Timeline vertical line */}
        <div className="position-absolute top-0 bottom-0 start-0 bg-dark" style={{ width: '4px', left: '15px', borderRadius: '10px' }}></div>

        {educationData.map((item, index) => (
          <div
            key={index}
            className="position-relative d-flex flex-column flex-md-row align-items-start mb-5"
            style={{ marginLeft: '30px' }}
          >
            {/* Circle marker */}
            <div className="bg-dark rounded-circle shadow" style={{ width: '20px', height: '20px', position: 'absolute', left: '-34px', top: '0' }}></div>

            {/* Timeline card */}
            <div className="bg-white shadow-sm rounded-4 p-4 w-100">
              <h5 className="fw-semibold text-primary">{item.course}</h5>
              <p className="mb-1 text-muted fst-italic">{item.college}</p>
              <p className="mb-1 text-secondary">{item.university}</p>
              <span className="badge bg-primary">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Education;
