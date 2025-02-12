import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#050816',
        color: 'white',
        py: 6,
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a team of professionals dedicated to providing the best services.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">
              Home
            </Link>
            <Link href="#" color="inherit" display="block" mt={1}>
              Services
            </Link>
            <Link href="#" color="inherit" display="block" mt={1}>
              Portfolio
            </Link>
            <Link href="#" color="inherit" display="block" mt={1}>
              Contact
            </Link>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" mt={1}>
              Phone: +123 456 7890
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="#" color="inherit">
                <Facebook sx={{ mr: 2 }} />
              </Link>
              <Link href="#" color="inherit">
                <Twitter sx={{ mr: 2 }} />
              </Link>
              <Link href="#" color="inherit">
                <Instagram sx={{ mr: 2 }} />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;