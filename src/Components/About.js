import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import profileImage from "../Assets/Images/Blue Minimalist Professional Instagram Profile Picture.png";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        color: "black",
        py: 6,
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <Container maxWidth="lg">
      {/* <Typography variant="h1">About Me</Typography> */}
      <Typography
              variant="h3"
              // component="h1"
              sx={{
                mb: 4,
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                textAlign: { xs: "center", md: "center" },
                animation: "fadeInRight 1s ease-in-out",
              }}
            >
              About Me
            </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* Profile Image */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center" >
            <Box
            // border={ '1px solid gray'}
            padding={'8px 20px'}
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                // backgroundColor: "white",
                transition: "box-shadow 0.3s ease",
                textAlign: "center",
                animation: "fadeInLeft 1s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.15)",
                },
                
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Kashif Haroon"
                sx={{
                  width: { xs: "100px", md: "150px" },
                  height: { xs: "100px", md: "150px" },
                  borderRadius: "50%",
                  boxShadow: 6,
                  border: "2px solid #10c8d2",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  mt: 2,
                  fontWeight: 600,
                  color: "#333",
                }}
              >
                Kashif Haroon
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  color: "#555",
                  fontWeight: 500,
                }}
              >
                MERN Stack | React.Js | Node,Js | Express.Js | MongoDb | Git | HTML | CSS | JavaScript |
              </Typography>
            </Box>
          </Grid>

          {/* About Me Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              component="h1"
              color="#10c8d2"
              sx={{
                mb: 1,
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "2rem" },
                textAlign: { xs: "center", md: "left" },
                animation: "fadeInRight 1s ease-in-out",
              }}
            >
              Who I Am...!! ?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "#555",
                lineHeight: 1.9,
                textAlign: { xs: "left", md: "left" },
                animation: "fadeInRight 1.5s ease-in-out",
              }}
            >
              Hi, I’m <strong style={{ color: "#10c8d2" }}>Kashif Haroon</strong>, a motivated MERN Full Stack Developer with
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
            <Box sx={{ display: "flex", gap: {xs : 1.5 , md : 2}, justifyContent: { xs: "center", md: "flex-start" } }}>
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
                  backgroundColor: "#10c8d2",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#333",
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
                    backgroundColor: "#10c8d2",
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
