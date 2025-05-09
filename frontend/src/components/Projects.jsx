import React from 'react';

const Projects = () => (
  <section id="projects" className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
    <div className="container">
      <h2 className="text-center fw-bold mb-5" style={{ color: '#343a40' }}>Projects</h2>
      <div className="row g-4">

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#dee2e6' }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Grofresh Basket – Grocery Delivery Website</h5>
              <h6 className="card-subtitle mb-2 text-muted">Tech Stack: MERN</h6>
              <p className="card-text">
                Built a feature-rich grocery delivery platform with real-time inventory updates.
                Implemented an admin dashboard for product and order management, using JWT authentication
                for role-based access control.
              </p>
              <a href="https://github.com/AnjanaUnnikrishnan24/Grocery_Delivery_App" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark mt-2">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#dee2e6' }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">KBA Courses</h5>
              <h6 className="card-subtitle mb-2 text-muted">Tech Stack: MERN</h6>
              <p className="card-text">
                Developed a full-stack website for showing courses available in KBA. The system allows admins to add,
                update, and manage courses, while users can browse and see all details about courses.
              </p>
              <a href="https://github.com/AnjanaUnnikrishnan24/KBA_Courses" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark mt-2">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#dee2e6' }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Book Haven - Library Website</h5>
              <h6 className="card-subtitle mb-2 text-muted">Tech Stack: MERN</h6>
              <p className="card-text">
                Built a role-based library system where users can search and rent books, while admins manage
                inventory and issue books. Implemented secure authentication with JWT and optimized search functionality.
              </p>
              <a href="https://github.com/AnjanaUnnikrishnan24/Library_BookHaven" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark mt-2">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#dee2e6' }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Contact Book - Mobile App</h5>
              <h6 className="card-subtitle mb-2 text-muted">Tech Stack: React Native & NestJS</h6>
              <p className="card-text">
                Developed a cross-platform mobile application to securely store and manage personal and professional
                contact details. The frontend is built with React Native and the backend with NestJS and MongoDB.
              </p>
              <a href="https://github.com/AnjanaUnnikrishnan24/Contact_Book" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark mt-2">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Projects;
