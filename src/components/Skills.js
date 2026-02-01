import React from "react";

// (Your categorizedSkills object remains exactly the same as you provided)
const categorizedSkills = {
  Frontend: [
    { name: "HTML", percentage: 90, iconUrl: "https://res.cloudinary.com/dexgotdr4/image/upload/v1756893454/html5-original_pldgjb.svg" },
    { name: "CSS", percentage: 85, iconUrl: "https://res.cloudinary.com/dexgotdr4/image/upload/v1756893485/css3-original_eow9i8.svg" },
    { name: "JavaScript", percentage: 65, iconUrl: "https://res.cloudinary.com/dexgotdr4/image/upload/v1756893525/javascript-original_z7flc1.svg" },
    { name: "React", percentage: 75, iconUrl: "https://res.cloudinary.com/dexgotdr4/image/upload/v1756893545/react-original_ys7gpo.svg" },
    { name: "Tailwind CSS", percentage: 70, iconUrl: "https://res.cloudinary.com/dexgotdr4/image/upload/v1757311533/OIP-removebg-preview_ieskve.png" },
  ],
  Backend: [
    { name: "Python", percentage: 75, iconUrl: "https://res.cloudinary.com/dexgotdr4/image/upload/v1756893636/python-original_mwhcol.svg" },
    { name: "Laravel", percentage: 60, iconUrl: "https://res.cloudinary.com/dexgotdr4/image/upload/v1756893851/OIP-removebg-preview_ghwb02.png" },
    { name: "C++", percentage: 40, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ],
  Database: [
    { name: "SQL", percentage: 85, iconUrl: "https://res.cloudinary.com/dexgotdr4/image/upload/v1756893589/mysql-original-wordmark_hwrpsb.svg" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="about-section section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  {/* Card Section */}
                  <div className="skill-card">
                    <img
                      src={skill.iconUrl}
                      alt={`${skill.name} logo`}
                      className="skill-icon"
                    />
                    <span>{skill.name}</span>
                  </div>

                  {/* Progress Bar Section */}
                  <div className="skill-progress-wrapper">
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-fill"
                        style={{ "--target-width": `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
