import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import profileImage from "../Assets/Images/Blue Minimalist Professional Instagram Profile Picture.png";
import bg from "../Assets/Images/laptop-1478822_1280.jpg";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        py: 8,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(30%)", // Darken the background
        }}
      />

      {/* Content Layer (Text, Buttons, etc.) */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            {/* Main Heading */}
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                lineHeight: 1.2,
                animation: "fadeIn 1s ease-in-out",
              }}
            >
              Hi, I'm <span style={{ color: "#10c8d2" }}>Kashif Haroon</span>
            </Typography>

            {/* Subheading */}
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 500,
                color: "#e0e0e0",
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              MERN Stack Developer | Frontend Specialist | Graphic Designer
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "#b9b9b9",
                maxWidth: "600px",
                animation: "fadeIn 2s ease-in-out",
              }}
            >
              Passionate about crafting beautiful and functional web applications
              with modern technologies. Experienced in React, Material-UI, Node,
              Express, and more.
            </Typography>

            {/* Hire Me Button */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "#ffffff", // White background
                color: "#000000",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "25px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#10c8d2",
                },
              }}
            >
              Hire Me
            </Button>
          </Grid>

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
                border: "4px solid #10c8d2",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Keyframes for Fade-In Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Header;



// import React from "react";
// import { Container, Grid, Typography, Button, Box } from "@mui/material";
// import profileImage from "../Assets/Images/my-logo.png";
// import bg from "../Assets/Images/laptop-1478822_1280.jpg"; 

// const Header = () => {
//   return (
//     <Box
//     sx={{
//       position: "relative",
//       color: "white",
//       py: 8,
//       height: "90vh",
//       display: "flex",
//       alignItems: "center",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       overflow: "hidden",
     
//     }}
//   >
//     {/* Background Image with Overlay */}
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         filter: "brightness(30%)", // Adjust darkness (lower = darker)
//       }}
//     />
  
//     {/* Content Layer (Text, Buttons, etc.) */}
//     <Container maxWidth='0px' sx={{ position: "relative", zIndex: 2 , maxWidth : '1150px' }}>
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={8}>
//           <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
//             Hi, I'm Kashif Haroon
//           </Typography>
//           <Typography variant="h6" sx={{ mb: 2 }}>
//             MERN Stack Developer | Frontend Specialist | Graphic Designer
//           </Typography>
//           <Typography variant="body1" color="#b9b9b9" sx={{ mb: 3 }}>
//             Passionate about crafting beautiful and functional web applications
//             with modern technologies. Experienced in React, Material-UI, and Node, Express, and more.
//           </Typography>
//           <Button variant="contained" color="primary" size="large">
//             Hire Me
//           </Button>
//         </Grid>
  
//         <Grid item xs={12} md={4} display="flex" justifyContent="center">
//           <Box
//             component="img"
//             src={profileImage}
//             alt="Kashif Haroon"
//             sx={{
//               width: "250px",
//               height: "250px",
//               borderRadius: "50%",
//               boxShadow: 3,
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Container>
//   </Box>
  
//   );
// };

// export default Header;
