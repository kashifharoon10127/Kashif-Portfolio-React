import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import backgroundImage from '../Assets/Images/oliver-pecker-HONJP8DyiSM-unsplash.jpg';

// Company logo and background image URLs
const companyLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVdJQ0AAv7wjaWXQSNzNFoz084fB_cIH7kw&s"; // Replace with SeeBiz logo URL

const Experience = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: { xs: 2, md: 4 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))", // Gradient overlay
          zIndex: 1,
        },
      }}
    >
      {/* Content */}
      <Grid container spacing={4} sx={{ position: "relative", zIndex: 2 }}>
        {/* Company Logo */}
        <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
          <Box
            component="img"
            src={companyLogo}
            alt="SeeBiz Pvt Ltd"
            sx={{
              width: { xs: "120px", md: "150px" },
              height: "auto",
              borderRadius: "8px",
              boxShadow: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              animation: "fadeInLeft 1s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: 6,
              },
            }}
          />
        </Grid>

        {/* Experience Details */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              animation: "fadeInRight 1s ease-in-out",
            }}
          >
            MERN Stack Trainee | SeeBiz Pvt Ltd
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "#ff4081",
              fontWeight: 600,
              animation: "fadeInRight 1.5s ease-in-out",
            }}
          >
            Aug 2024 - Present
          </Typography>
          <Box sx={{ "& .MuiTypography-body1": { mb: 2, animation: "fadeInRight 2s ease-in-out" } }}>
            <Typography variant="body1">
              - Designed responsive frontends using <strong>HTML, CSS, JavaScript, Bootstrap</strong>.
            </Typography>
            <Typography variant="body1">
              - Designed modern, interactive frontends using <strong>React.js</strong> and <strong>Material-UI</strong>.
            </Typography>
            <Typography variant="body1">
              - Developed and maintained <strong>RESTful APIs</strong> using <strong>Node.js</strong> & <strong>Express.js</strong>.
            </Typography>
            <Typography variant="body1">
              - Utilized <strong>MongoDB</strong> for database management and data storage.
            </Typography>
            <Typography variant="body1">
              - Performed thorough API testing using <strong>Postman</strong>.
            </Typography>
          </Box>
        </Grid>
      </Grid>

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

export default Experience;


// 
// 
// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import backgroundImage from '../Assets/Images/oliver-pecker-HONJP8DyiSM-unsplash.jpg'
// // Company logo and background image URLs
// const companyLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVdJQ0AAv7wjaWXQSNzNFoz084fB_cIH7kw&s"; // Replace with SeeBiz logo URL


// const Experience = () => {
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         color: "white",
//         padding: { xs: 2, md: 4 },
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(22, 12, 12, 0.5)", // Adjust opacity here
//           zIndex: 1,
//           opacity : 1
//         },
//       }}
//     >
//       {/* Content */}
//       <Grid container spacing={4} sx={{ position: "relative", zIndex: 2 }}>
//         {/* Company Logo */}
//         <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
//           <img
//             src={companyLogo}
//             alt="SeeBiz Pvt Ltd"
//             style={{ width: "150px", height: "auto", borderRadius: "8px" }}
//           />
//         </Grid>

//         {/* Experience Details */}
//         <Grid item xs={12} md={8}>
//           <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
//             MERN Stack Trainee | SeeBiz Pvt Ltd
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             Aug 2024 - Present
//           </Typography>
//           <Typography variant="body1" paragraph>
//             - Designed responsive frontends using <strong>HTML, CSS, JavaScript, Bootstrap</strong>.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             - Designed modern, interactive frontends using <strong>React.js</strong> and <strong>Material-UI</strong>.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             - Developed and maintained <strong>RESTful APIs</strong> using <strong>Node.js</strong> & <strong>Express.js</strong>.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             - Utilized <strong>MongoDB</strong> for database management and data storage.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             - Performed thorough API testing using <strong>Postman</strong>.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Experience;