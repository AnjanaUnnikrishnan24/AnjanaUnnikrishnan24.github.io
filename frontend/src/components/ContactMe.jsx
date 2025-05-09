import React from 'react';

const ContactMe = () => (
  <section
    id="contact"
    className="py-5"
    style={{ backgroundColor: '#e9ecef' }} // light gray
  >
    <div className="container">
      <h2 className="text-center fw-bold mb-5" style={{ color: '#343a40' }}>
        Contact Me
      </h2>
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-center gap-3">
            <a
              href="https://github.com/AnjanaUnnikrishnan24"
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-75"
              style={{
                backgroundColor: '#343a40',
                color: '#fff',
                border: 'none',
              }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anjana-unnikrishnan-au97/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-75"
              style={{
                backgroundColor: '#6c757d',
                color: '#fff',
                border: 'none',
              }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:anjana24unni@gmail.com"
              className="btn w-75"
              style={{
                backgroundColor: '#adb5bd',
                color: '#212529',
                border: 'none',
              }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMe;

