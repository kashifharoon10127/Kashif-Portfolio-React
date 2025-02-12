import React from 'react';
import { Box, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', padding: 5  }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Side Content - Centered Vertically */}
        <Grid item xs={12} md={6}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <ContactMailIcon sx={{ fontSize: 60, color: '#1976d2' }} />
            <Typography variant="h4" gutterBottom>Get in Touch</Typography>
            <Typography variant="body1" color="textSecondary">
              Have a project in mind? Let’s talk about it.
            </Typography>
            {/* Social Icons */}
            <Box sx={{ marginTop: 2 }}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <IconButton href="#" color="primary"><FacebookIcon /></IconButton>
                <IconButton href="#" color="primary"><TwitterIcon /></IconButton>
                <IconButton href="#" color="primary"><LinkedInIcon /></IconButton>
                <IconButton href="#" color="primary"><GitHubIcon /></IconButton>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>
        
        {/* Right Side Form */}
        <Grid item xs={12} md={6}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Name" variant="outlined" fullWidth />
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
              <Button variant="contained" color="primary">Send Message</Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;