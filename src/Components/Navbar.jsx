import { AppBar, Avatar, Box, Button, Container, Grid, Toolbar, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';
import myLogo from '../Assets/Images/my-logo.png';

function Navbar({ scrollToSection, refs }) {
  const [menuIcon, setMenuIcon] = useState(false);
  const [navBg, setNavBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg('black');
      } else {
        setNavBg('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <AppBar elevation={0} sx={{ backgroundColor: navBg, transition: 'background-color 0.3s ease' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Grid container alignItems="center">
            {/* Logo */}
            <Grid item xs={6}>
              <Avatar src={myLogo} alt="KASHIF HAROON" sx={{ width: "60px", height: "60px" }} />
            </Grid>

            {/* Desktop Menu */}
            <Grid item gap={4} xs={6} sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              justifyContent: 'flex-end', 
              '& button': { 
                fontSize: '1.1rem', 
                color: 'white', 
                textTransform: 'none',
                position: 'relative',
                transition: 'color 0.3s ease, transform 0.2s ease',
                '&:hover': {
                  color: '#10c8d2', // Navy blue shade
                  transform: 'scale(1.1)',
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-5px',
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#10c8d2',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                },
                '&:hover:after': {
                  transform: 'scaleX(1)',
                }
              }
            }}>
              <Button onClick={() => scrollToSection(refs.homeRef)}>Home</Button>
              <Button onClick={() => scrollToSection(refs.aboutRef)}>About</Button>
              <Button onClick={() => scrollToSection(refs.projectsRef)}>Projects</Button>
              <Button onClick={() => scrollToSection(refs.skillsRef)}>Skills</Button>
              <Button onClick={() => scrollToSection(refs.experienceRef)}>Experience</Button>
              <Button onClick={() => scrollToSection(refs.contactRef)}>Contact</Button>
            </Grid>

            {/* Mobile Menu Icon */}
            <Grid component={Button} color={'inherit'} item xs={6} sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'flex-end' }} onClick={toggleMenu}>
              <MenuIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>

      {/* Drawer (Mobile Menu) */}
      <Drawer anchor="right" open={menuIcon} onClose={toggleMenu}>
        <Box sx={{ width: 150, padding: 2 }}>
          {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((text, index) => (
            <Button 
              key={index} 
              onClick={() => { scrollToSection(refs[text.toLowerCase() + 'Ref']); toggleMenu(); }} 
              color="inherit" 
              sx={{ textTransform: 'none', width: '100%', '&:hover': { color: '#1E3A8A' } }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;


// ......................................
// import { AppBar, Avatar, Box, Button, Container, Grid, Toolbar, Drawer } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import React, { useState } from 'react';
// import myLogo from '../Assets/Images/my-logo.png';
// import navbg from '../Assets/Images/navBg.jpg';

// function Navbar({ scrollToSection, refs }) {
//   const [menuIcon, setMenuIcon] = useState(false);

//   const toggleMenu = () => {
//     setMenuIcon(!menuIcon);
//   };

//   return (
//     <AppBar elevation={0} sx={{ backgroundImage: `url(${navbg})`,  backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//       <Container maxWidth="lg">
//         <Toolbar>
//           <Grid container>
//             {/* Logo */}
//             <Grid item xs={6}>
//               <Avatar src={myLogo} alt="KASHIF HAROON" sx={{ width: "60px", height: "60px" }} />
//             </Grid>

//             {/* Desktop Menu */}
//             <Grid item gap={4} xs={6} sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', '& button': { fontSize: '1.1rem' } }}>
//               <Button onClick={() => scrollToSection(refs.homeRef)} color='inherit' sx={{ textTransform: 'none' }}>Home</Button>
//               <Button onClick={() => scrollToSection(refs.aboutRef)} color='inherit' sx={{ textTransform: 'none' }}>About</Button>
//               <Button onClick={() => scrollToSection(refs.projectsRef)} color='inherit' sx={{ textTransform: 'none' }}>Projects</Button>
//               <Button onClick={() => scrollToSection(refs.skillsRef)} color='inherit' sx={{ textTransform: 'none' }}>Skills</Button>
//               <Button onClick={() => scrollToSection(refs.experienceRef)} color='inherit' sx={{ textTransform: 'none' }}>Experience</Button>

//               <Button onClick={() => scrollToSection(refs.contactRef)} color='inherit' sx={{ textTransform: 'none' }}>Contact</Button>
//             </Grid>

//             {/* Mobile Menu Icon */}
//             <Grid component={Button} color={'inherit'} item xs={6} sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'flex-end' }} onClick={toggleMenu}>
//               <MenuIcon />
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </Container>

//       {/* Drawer (Mobile Menu) */}
//       <Drawer anchor="right" open={menuIcon} onClose={toggleMenu}>
//         <Box sx={{ width: 150, padding: 2 }}>
//           <Button onClick={() => { scrollToSection(refs.homeRef); toggleMenu(); }} color="inherit" sx={{ textTransform: 'none' }} fullWidth>Home</Button>
//           <Button onClick={() => { scrollToSection(refs.aboutRef); toggleMenu(); }} color="inherit" sx={{ textTransform: 'none' }} fullWidth>About</Button>
       
//           <Button onClick={() => { scrollToSection(refs.projectsRef); toggleMenu(); }} color="inherit" sx={{ textTransform: 'none' }} fullWidth>Projects</Button>
//           <Button onClick={() => { scrollToSection(refs.skillsRef); toggleMenu(); }} color="inherit" sx={{ textTransform: 'none' }} fullWidth>Skills</Button>
//           <Button onClick={() => { scrollToSection(refs.experienceRef); toggleMenu(); }} color="inherit" sx={{ textTransform: 'none' }} fullWidth>Experience</Button>
//           <Button onClick={() => { scrollToSection(refs.contactRef); toggleMenu(); }} color="inherit" sx={{ textTransform: 'none' }} fullWidth>Contact</Button>
//         </Box>
//       </Drawer>
//     </AppBar>
//   );
// }

// export default Navbar;
