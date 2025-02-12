import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import profileImage from "../Assets/Images/my-logo.png";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        color: "black",
        py: 8,
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Profile Image */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Box
              component="img"
              src={profileImage}
              alt="Kashif Haroon"
              sx={{
                width: { xs: "200px", md: "250px" },
                height: { xs: "200px", md: "250px" },
                borderRadius: "50%",
                boxShadow: 6,
                border: "4px solid #ff4081",
                transition: "transform 0.3s ease",
                animation: "fadeInLeft 1s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>

          {/* About Me Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                animation: "fadeInRight 1s ease-in-out",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#333",
                animation: "fadeInRight 1.5s ease-in-out",
              }}
            >
              Kashif Haroon
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "#555",
                lineHeight: 1.8,
                animation: "fadeInRight 2s ease-in-out",
              }}
            >
              Hi, I’m <strong style={{ color: "#ff4081" }}>Kashif Haroon</strong>, a motivated MERN Full Stack Developer with
              hands-on experience in building modern web applications.
              <br />
              My expertise lies in:
              <br />
              <strong>Frontend Development:</strong> HTML, CSS, JavaScript,
              React.js, Bootstrap, Material-UI (MUI), Tailwind CSS
              <br />
              <strong>Backend Development:</strong> Node.js, Express.js, RESTful APIs, Socket.IO
              <br />
              <strong>Database Management:</strong> MongoDB
              <br />
              <strong>Tools & Version Control:</strong> Git, GitHub, Postman
              <br />
              I thrive in creating seamless, user-friendly applications and
              enjoy solving real-world problems with efficient and scalable
              code. With experience in real-time functionalities using Socket.IO
              and modern UI frameworks like MUI and Bootstrap, I ensure my
              applications are both interactive and visually appealing.
              Currently, I am focusing on expanding my knowledge and
              contributing to impactful projects, where I can showcase my skills
              and grow as a developer. Let’s connect to build something
              incredible together!
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "25px",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  backgroundColor: "#ff4081",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#e91e63",
                  },
                }}
              >
                Visit LinkedIn
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "25px",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  backgroundColor: "#333",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#555",
                  },
                }}
              >
                Visit GitHub
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Keyframes for Animations */}
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default About;




// import React from "react";
// import { Container, Grid, Typography, Button, Box } from "@mui/material";
// import profileImage from "../Assets/Images/my-logo.png";
// import bg from "../Assets/Images/laptop-1478822_1280.jpg";

// const About = () => {
//   return (
//     <Box
//       sx={{
//         //  background: 'linear-gradient(to right, #000428, #121313)',
//         backgroundColor : '#f8f8f8' ,
        
//         // backgroundImage: `url(${bg})`,
//         color: "black",
//         py: 8,
//         height: "90vh",
//         display: "flex",
//         alignItems: "center",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
        
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={4} display="flex" justifyContent="center">
//             <Box
//               component="img"
//               src={profileImage}
//               alt="Kashif Haroon"
//               sx={{
//                 width: "250px",
//                 height: "250px",
//                 borderRadius: "50%",
//                 boxShadow: 3,
//               }}
//             />
           
//           </Grid>
          
//           <Grid item xs={12} md={8}>
//             <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
//               About Me
//             </Typography>
//             <Typography variant="h5" sx={{ mb: 2 }}>
//               Kashif Haroon
//             </Typography>
//             <Typography variant="body1" color="black" sx={{ mb: 3 }}>
//               Hi, I’m <strong>Kashif Haroon </strong>, a motivated MERN Full Stack Developer with
//               hands-on experience in building modern web applications.
//               <br/>
//                My
//               expertise lies in:<br/> <strong> Frontend Development: </strong>
//               HTML, CSS, JavaScript,
//               React.js, Bootstrap, Material-UI (MUI) , Tailwand CSS
//               <br/> <strong>
//                Backend
//               Development: </strong>Node.js, Express.js, RESTful APIs, Socket.IO
//               <br/> <strong>Database
            
//               Management:</strong> MongoDB 
//               <br/> <strong>Tools & Version Control: </strong>Git, GitHub, Postman <br/>
//               I thrive in creating seamless, user-friendly applications and
//               enjoy solving real-world problems with efficient and scalable
//               code. With experience in real-time functionalities using Socket.IO
//               and modern UI frameworks like MUI and Bootstrap, I ensure my
//               applications are both interactive and visually appealing.
//               Currently, I am focusing on expanding my knowledge and
//               contributing to impactful projects, where I can showcase my skills
//               and grow as a developer. Let’s connect to build something
//               incredible together!"{" "}
//             </Typography>
//             <Button variant="contained" color="primary" size="large" >
//               Visit Linkedin
//             </Button>
//             <Button variant="contained" color="primary" size="large" sx={{marginLeft : 2}}>
//               Visit GitHub
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default About;
