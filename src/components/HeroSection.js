import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; 

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <Box
      sx={{
        position: "relative",
        width: "89vw", // Ensure full width
        height: "100vh", // Ensure full height
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover", // Ensures it covers the entire screen
        backgroundPosition: "center center", // Keeps the focus in the middle
        backgroundRepeat: "no-repeat", // Prevents tiling
        backgroundAttachment: "fixed", // Optional: Creates a parallax effect
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        padding: "5%",
        color: "white",
      }}
    >
      
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Content on top of the background image */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "50%" }}>
        <Typography variant="h2" sx={{ mt: 2 }}>
        46+2 is a gamified self-improvement app that helps you level up your mind and body.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "red",
            color: "white",
            padding: "12px 24px",
            fontSize: "18px",
            borderRadius: "30px",
          }}
          onClick={() => navigate("/download")} // Navigate to Download Page
        >
          Download Now iOS
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;