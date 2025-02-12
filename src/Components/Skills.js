import React from "react";

// Skill data with image URLs and text
const skills = [
  { name: "HTML", image: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png" },
  { name: "CSS", image: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "React", image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png" },
  { name: "Node.js", image: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { name: "Express", image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "Git", image: "https://cdn-icons-png.flaticon.com/512/4494/4494748.png" },
  { name: "GitHub", image: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
  { name: "Redux", image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png" },
  { name: "Postman", image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "Figma", image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
];

// Inline styles
const styles = {
  skillsContainer: {
    backgroundColor: "#f8f8f8",
    padding: "20px",
    textAlign: "center",
  },
  skillsHeading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  skillItem: {
    textAlign: "center",
    padding: "10px",
    transition: "transform 0.3s ease-in-out",
  },
  skillImage: {
    width: "64px",
    height: "64px",
    marginBottom: "10px",
    transition: "filter 0.3s ease-in-out",
  },
  skillText: {
    fontSize: "1rem",
    color: "#555",
    transition: "color 0.3s ease-in-out",
  },
};

const Skills = () => {
  return (
    <div style={styles.skillsContainer}>
      <h2 style={styles.skillsHeading}>My Skills</h2>
      <div style={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={styles.skillItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.querySelector("img").style.filter = "brightness(1.2)";
              e.currentTarget.querySelector("p").style.color = "#007BFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.querySelector("img").style.filter = "brightness(1)";
              e.currentTarget.querySelector("p").style.color = "#555";
            }}
          >
            <img src={skill.image} alt={skill.name} style={styles.skillImage} />
            <p style={styles.skillText}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;