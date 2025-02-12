import * as React from "react";
import { styled } from "@mui/material/styles";
import projectBg from "../Assets/Images/code.jpg";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const cardsData = [
  {
    title: "Speedo Bus Route Application",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is the first card with a unique descriptionThis is the first card with a unique descriptionThis is the first card with a unique description.",
  },
  {
    title: "Social Media App",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The second card contains some different content.This is the first card with a unique descriptionThis is the first card with a unique descriptionThis is the first card with a unique description",
  },
  {
    title: "Teacher Student Admin Panel",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Here's the third card with some varied detailsThis is the first card with a unique descriptionThis is the first card with a unique description.",
  },
];

export default function Projects() {
  return (
    <Box sx={{ position: "relative", pb: 18, pt: 5, minHeight: "100vh" }}>
      {/* Overlay Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${projectBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(40%)",
                    zIndex: -1, 
          opacity : 0.8
        }}
      />

      <Typography variant="h3" textAlign="center" color="white" py={5}>
        PROJECTS
      </Typography>
      <Container maxWidth="lg" sx={{mt : 5}} >
        <Grid container justifyContent="center" spacing={3}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 320, mx: "auto" }}>
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }}>{card.title.charAt(0)}</Avatar>}
                  title={<Typography variant="h6">{card.title}</Typography>}
                />
                <CardMedia component="img" height="180" image={card.image} alt="Card Image" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <Button size="small" variant="outlined">Preview</Button>
                    <Button size="small" variant="contained" sx={{ ml: 1 }}>View Code</Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
