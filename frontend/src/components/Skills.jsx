import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Skills</h2>
        <div className="row">
          <SkillCategory title="Languages" skills="Python, JavaScript, TypeScript" />
          <SkillCategory title="Frontend" skills="HTML, CSS" />
          <SkillCategory title="Frameworks & Libraries" skills="React, React Native, Tailwind CSS" />
          <SkillCategory title="Backend" skills="Node.js, Express.js, Nest.js" />
          <SkillCategory title="Databases" skills="MySQL, MongoDB" />
          <SkillCategory title="Tools & Platforms" skills="Postman, Git, GitHub, Docker" />
          <SkillCategory title="UI/UX & Design" skills="Figma, Canva" />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text">{skills}</p>
      </div>
    </div>
  </div>
);

export default Skills;